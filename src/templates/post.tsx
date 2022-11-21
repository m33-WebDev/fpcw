import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Block, Columns, Container, Content, Heading, Icon, Section } from "react-bulma-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Layout, Seo, RichText, NewsletterSignup, Typography } from "../components";

export function Head({ data }) {
    const { title, metaTitle, metaDescription } = data.contentfulPost;
    return <Seo title={metaTitle ?? title} description={metaDescription?.metaDescription ?? ""} />;
}

export default function Post({ data }) {
    const { title, feature, body } = data.contentfulPost;

    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns centered={true} gap={8}>
                        <Columns.Column size={6}>
                            <FancyFrontmatter>
                                <Block>
                                    <Typography as="h1" family="secondary" size="xxl">
                                        {title}
                                    </Typography>
                                </Block>
                                <FancyFeatureImage image={getImage(feature)!} alt="Post feature" />
                                <Link to="/library">
                                    <Block display="flex" alignItems="center" textColor="success">
                                        <Icon>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </Icon>
                                        <Typography as="span">Back to library</Typography>
                                    </Block>
                                </Link>
                            </FancyFrontmatter>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <Content size="medium">
                                <RichText src={body} />
                                <FancyDivider />
                                <NewsletterSignup />
                            </Content>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

const FancyFrontmatter = styled.div`
    @media (min-width: 1024px) {
        position: sticky;
        top: 10vh;
    }
`;

const FancyFeatureImage = styled(GatsbyImage)`
    object-fit: cover;
    margin-bottom: 5vmin;
`;

const FancyDivider = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`;

export const query = graphql`
    query ($pagePath: String!) {
        contentfulPost(slug: { eq: $pagePath }) {
            slug
            title
            metaTitle
            feature {
                gatsbyImageData(width: 800, placeholder: BLURRED)
            }
            metaDescription {
                metaDescription
            }
            body {
                raw
            }
        }
    }
`;
