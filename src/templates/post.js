import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, Seo, RichText, NewsletterSignup } from "../components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import * as pageStyle from "./post.module.scss";

function Post({ data }) {
    const { title, metaTitle, feature, body, metaDescription } = data.contentfulPost;

    return (
        <Layout>
            <Seo title={metaTitle || title} description={metaDescription ? metaDescription.metaDescription : ""} />
            <div className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-desktop is-variable is-8">
                            <div className="column is-6">
                                <div className={pageStyle.Frontmatter}>
                                    <div className="content">
                                        <h1 className="title" style={{ textAlign: "left" }}>
                                            {title}
                                        </h1>
                                    </div>
                                    <GatsbyImage
                                        image={getImage(feature)}
                                        alt="Post feature"
                                        style={{ objectFit: "cover", marginBottom: "5vmin" }}
                                    />
                                    <Link to="/library" className="has-text-success is-hidden-mobile">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                        {" Back to library"}
                                    </Link>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className={pageStyle.body}>
                                    <RichText src={body} />
                                    <hr
                                        style={{
                                            border: 0,
                                            height: "1px",
                                            backgroundImage:
                                                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                                        }}
                                    />
                                    <NewsletterSignup />
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($pagePath: String!) {
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

export default Post;
