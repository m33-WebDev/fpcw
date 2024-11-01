import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Block, Box, Columns, Container, Section } from "react-bulma-components";
import { Layout, Typography } from "../components";

export default function Gallery({ data }) {
    const { gallery } = data;

    return (
        <Layout>
            <Section>
                <Container>
                    <Block>
                        <Typography as="h1" family="secondary" size="xxl">
                            Photo Gallery
                        </Typography>
                    </Block>
                    <Columns multiline={true} centered={true}>
                        {gallery.photos.map(photo => (
                            <Columns.Column size={6}>
                                <Box>
                                    {/* @ts-ignore: @todo: Missing props on Gatsby image */}
                                    <GatsbyImage image={getImage(photo)} alt="Image" height={400} width={400} />
                                    <Typography>{photo.description}</Typography>
                                </Box>
                            </Columns.Column>
                        ))}
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

export const data = graphql`
    query {
        gallery: contentfulGallery(title: { eq: "Office and Staff" }) {
            photos {
                gatsbyImageData(width: 800)
                description
            }
        }
    }
`;
