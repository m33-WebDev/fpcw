import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Columns, Container, Heading, Section } from "react-bulma-components";
import { Layout } from "../components";

export default function Gallery({ data }) {
    const { gallery } = data;

    return (
        <Layout>
            <Section>
                <Container>
                    <Heading>Photo Gallery</Heading>
                    <Columns multiline={true} centered={true}>
                        {gallery.photos.map(photo => (
                            <Columns.Column size={6}>
                                <Box>
                                    <GatsbyImage image={getImage(photo)} alt="Image" height={400} width={400} />
                                    <p>{photo.description}</p>
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
