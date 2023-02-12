import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, RichText, Typography } from "../components";

export function Head({ data }: HeadProps<Queries.ProviderProfileQuery>) {
    const { name, jobTitle, description } = data.profile!;
    const title = `${name}, ${jobTitle} | Providers`;
    return <Seo title={title} description={description?.description!} />;
}

export default function ProviderProfile({ data }: PageProps<Queries.ProviderProfileQuery>) {
    const { name, credential, jobTitle, headshot, bio } = data.profile!;

    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={8}>
                        <Columns.Column size={6}>
                            <GatsbyImage image={getImage(headshot)!} alt="Headshot" />
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <Block display="flex">
                                <Typography as="h1" family="secondary" size="xxl">
                                    {name}
                                </Typography>
                                <Typography as="span">{credential || jobTitle}</Typography>
                            </Block>
                            <Content size="medium">
                                {bio ? (
                                    <RichText src={bio} />
                                ) : (
                                    <Typography>
                                        No information available at this time. Please check back again later.
                                    </Typography>
                                )}
                            </Content>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query ProviderProfile($id: String!) {
        profile: contentfulProviderProfile(id: { eq: $id }) {
            name
            credential
            jobTitle
            headshot {
                gatsbyImageData(width: 1000, placeholder: BLURRED)
            }
            description {
                description
            }
            bio {
                raw
            }
        }
    }
`;
