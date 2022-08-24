import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Block, Card, Columns, Container, Content, Heading, Section } from "react-bulma-components";
import styled from "styled-components";
import { Layout, Seo, Typography } from "../components";

export default function Providers({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;
    const profiles = [].concat(
        data.profSabira,
        data.profPsych.nodes,
        data.profNP.nodes,
        data.profLMFT.nodes,
        data.profAdmin.nodes
    );

    return (
        <>
            <Seo title={metaTitle} description={metaDescription} />
            <Layout>
                <Section>
                    <Container>
                        {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                        <Columns gap={4}>
                            <Columns.Column size={4}>
                                <FancyBlurb>
                                    <Block>
                                        <Typography as="h1" family="secondary" size="xxl">
                                            Find the Right Expert for Your Mental Health Needs
                                        </Typography>
                                    </Block>
                                    <Content size="medium">
                                        <Typography>
                                            Our professional staff consists of board-certified, experienced
                                            psychiatrists, therapists, nurse practitioners, and others. We are,
                                            individually and collectively, committed to providing the highest quality
                                            care to our patients and to advancing wellness of the mind, body, and
                                            spirit.
                                        </Typography>
                                    </Content>
                                </FancyBlurb>
                            </Columns.Column>
                            <Columns.Column size={8}>
                                <Columns multiline={true}>
                                    {profiles.map(({ slug, name, headshot }, i) => (
                                        <Columns.Column size={4} key={i}>
                                            <Link to={`/providers/${slug}`}>
                                                <FancyCard>
                                                    <FancyPostImage
                                                        fluid={
                                                            headshot
                                                                ? headshot.fluid
                                                                : "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                                                        }
                                                        key={headshot.fluid.src}
                                                        alt={headshot.fluid.title}
                                                    />
                                                    <FancyPostTitle>
                                                        <Typography>{name}</Typography>
                                                    </FancyPostTitle>
                                                </FancyCard>
                                            </Link>
                                        </Columns.Column>
                                    ))}
                                </Columns>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </Layout>
        </>
    );
}

const FancyBlurb = styled.div`
    @media (min-width: 1024px) {
        position: sticky;
        top: 15vh;
    }
`;

const FancyHeading = styled(Heading)`
    border-bottom: 4px solid #48c774;
    text-align: left;
    padding-bottom: 0.3em;
`;

const FancyCard = styled(Card)`
    @media (max-width: 769px) {
        height: 70vmin;
    }
    @media (min-width: 769px) {
        height: 30vmin;
    }
`;

const FancyPostTitle = styled.div`
    border: 3px solid #48c774;
    border-right: 0px;

    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.3em;
    text-align: left;
    background: rgba(72, 199, 116, 0.7);
    max-width: 70%;
`;

const FancyPostImage = styled(Img)`
    height: 100%;
`;

export const query = graphql`
    query {
        contentfulPage(title: { eq: "Providers" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
        profSabira: contentfulProviderProfile(slug: { eq: "sabira-saifuddin" }) {
            slug
            name
            jobTitle
            headshot {
                fluid(maxWidth: 600) {
                    ...GatsbyContentfulFluid
                }
            }
        }
        profPsych: allContentfulProviderProfile(
            filter: { credential: { eq: "MD" }, slug: { ne: "sabira-saifuddin" } }
        ) {
            nodes {
                slug
                name
                jobTitle
                headshot {
                    fluid(maxWidth: 600) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
        profNP: allContentfulProviderProfile(
            filter: { credential: { eq: "PMHNP" }, name: { nin: "Sabira Saifuddin" } }
        ) {
            nodes {
                slug
                name
                jobTitle
                headshot {
                    fluid(maxWidth: 600) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
        profLMFT: allContentfulProviderProfile(
            filter: { credential: { eq: "LMFT" }, name: { nin: "Sabira Saifuddin" } }
        ) {
            nodes {
                slug
                name
                jobTitle
                headshot {
                    fluid(maxWidth: 600) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
        profAdmin: allContentfulProviderProfile(filter: { credential: { nin: ["MD", "PMHNP", "LMFT"] } }) {
            nodes {
                slug
                name
                jobTitle
                headshot {
                    fluid(maxWidth: 600) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;
