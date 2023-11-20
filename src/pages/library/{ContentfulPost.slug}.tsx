import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import styled from "styled-components";
import { Layout, NewsletterSignup, RichText, Seo, Typography } from "../../components";

export function Head({ data }: HeadProps<Queries.PostQuery>) {
    const { title, metaTitle, metaDescription } = data.post!;
    return <Seo title={metaTitle ?? title!} description={metaDescription?.metaDescription ?? ""} />;
}

export default function Post({ data }: PageProps<Queries.PostQuery>) {
    const { title, feature, body } = data.post!;

    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns multiline={true}>
                        <Columns.Column size="half">
                            <Typography as="h1" size="xxl">
                                {title}
                            </Typography>
                        </Columns.Column>
                        <Columns.Column size="two-thirds">
                            {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                            <Columns gap={4}>
                                <Columns.Column size="three-quarters">
                                    <Block>
                                        <GatsbyImage image={getImage(feature!)!} alt="Post feature" />
                                    </Block>
                                    <Content size="medium">
                                        <RichText src={body} />
                                    </Content>
                                </Columns.Column>
                                <Columns.Column size="one-quarter">
                                    <Content>
                                        <NewsletterSignup />
                                    </Content>
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

const FancyDivider = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`;

export const query = graphql`
    query Post($id: String) {
        post: contentfulPost(id: { eq: $id }) {
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
