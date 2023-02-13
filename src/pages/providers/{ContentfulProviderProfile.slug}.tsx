import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo } from "../../components";
import { Body, Frontmatter } from "../../components/provider-profile";
import { ContentfulRichText, Nullable } from "../../types";

export function Head({ data }: HeadProps<Queries.ProviderProfileQuery>) {
    const { name, jobTitle, description } = data.profile!;
    const title = `${name}, ${jobTitle} | Providers`;
    return <Seo title={title} description={description?.description ?? ""} />;
}

export default function ProviderProfile({ data }: PageProps<Queries.ProviderProfileQuery>) {
    const { name, credential, jobTitle, headshot, bio } = data.profile!;

    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={8}>
                        <Columns.Column>
                            <GatsbyImage image={getImage(headshot!)!} alt="Headshot" />
                        </Columns.Column>
                        <Columns.Column>
                            <Frontmatter name={name!} credential={credential} jobTitle={jobTitle!} />
                            <Body bio={bio as Nullable<ContentfulRichText>} />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query ProviderProfile($id: String) {
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
