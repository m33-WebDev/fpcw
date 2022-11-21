import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Block, Columns, Container, Content, Icon, Section } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Layout, Seo, RichText, Typography } from "../components";

export function Head({ data }) {
    const { name, jobTitle, description } = data.contentfulProviderProfile;
    const title = `${name}, ${jobTitle} | Providers`;
    return <Seo title={title} description={description} />;
}

export default function ProviderProfile({ data }) {
    const { name, credential, jobTitle, headshot, bio } = data.contentfulProviderProfile;

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
                            <Link to="/providers">
                                <Block display="flex" alignItems="center" textColor="success">
                                    <Icon>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </Icon>
                                    <Typography as="span">Back to provider list</Typography>
                                </Block>
                            </Link>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

export const query = graphql`
    query ($pagePath: String!) {
        contentfulProviderProfile(slug: { eq: $pagePath }) {
            slug
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
