import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout } from "../components";

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

function Title() {
    return (
        <h1 class="title has-text-centered" style={{ marginTop: "2vmin" }}>
            Photo Gallery
        </h1>
    );
}

function Photos({ photos }) {
    return (
        <div className="columns is-multiline is-centered">
            {photos.map(photo => (
                <div className="column is-6">
                    <div class="box">
                        <GatsbyImage image={getImage(photo)} alt="Image" height={400} width={400} />
                        <p>{photo.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Gallery({ data }) {
    const { gallery } = data;

    return (
        <Layout>
            <div className="container">
                <Title />
                <Photos photos={gallery.photos} />
            </div>
        </Layout>
    );
}

export default Gallery;
