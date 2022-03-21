import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import * as styles from "./library.module.scss";

function Library({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <Layout>
            <Seo title={metaTitle} description={metaDescription} />
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-desktop is-variable is-4">
                            <div className="column is-4">
                                <div className={"content has-text-centered " + styles.PageDescription}>
                                    <h1
                                        className="title"
                                        style={{
                                            borderBottom: "4px solid #48C774",
                                            textAlign: "left",
                                            paddingBottom: ".3em"
                                        }}
                                    >
                                        The Health Library
                                    </h1>
                                    <p className="is-size-5" style={{ textAlign: "left" }}>
                                        Read up on the conditions we treat, the treatments we offer, and developments in
                                        the fields of psychiatry, mental health, and wellness.
                                    </p>
                                </div>
                            </div>
                            <div className="column is-8">
                                <div className="columns is-multiline is-desktop">
                                    {data.allContentfulPost.nodes.map(({ slug, title, feature }, i) => {
                                        return (
                                            <div className="column is-4" key={i}>
                                                <Link to={"/library/" + slug}>
                                                    <div className={"card " + styles.Card}>
                                                        <Img
                                                            fluid={feature.fluid}
                                                            key={feature.fluid.src}
                                                            alt={feature.fluid.title}
                                                            style={{ height: "100%" }}
                                                        />
                                                        <div className={"content " + styles.PostTitle}>
                                                            <div className="title is-6 has-text-light">{title}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulPage(title: { eq: "Library" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
        allContentfulPost(sort: { fields: createdAt, order: DESC }) {
            nodes {
                slug
                title
                createdAt(difference: "minutes")
                feature {
                    fluid(maxWidth: 600) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

export default Library;
