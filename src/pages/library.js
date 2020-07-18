import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import pageStyle from "./library.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="FPCW - Library" />
      <div className="hero">
        <div className="hero-body">
          <div className="columns is-desktop">
            <div className="column is-4" style={{ padding: "0 5vmin" }}>
              <div
                className={
                  "content has-text-centered " + pageStyle.PageDescription
                }
              >
                <h1
                  className="title"
                  style={{
                    borderBottom: "4px solid #48C774",
                    textAlign: "left",
                    paddingBottom: ".3em",
                  }}
                >
                  The Health Library
                </h1>
                <p className="is-size-5" style={{ textAlign: "left" }}>
                  Read up on the conditions we treat, the treatments we offer,
                  and developments in the fields of psychiatry, mental health,
                  and wellness.
                </p>
              </div>
            </div>
            <div className="column is-8">
              <div className="columns is-multiline is-desktop">
                {data.allContentfulPost.nodes.map(
                  ({ slug, title, feature }, i) => {
                    return (
                      <div className="column is-4" key={i}>
                        <Link to={"/library/" + slug}>
                          <div className="card">
                            <div
                              className="card-image"
                              style={{ position: "relative" }}
                            >
                              <figure className="image is-square">
                                <img
                                  src={
                                    feature
                                      ? feature.file.url
                                      : "https://versions.bulma.io/0.5.3/images/placeholders/1280x960.png"
                                  }
                                  alt="Post Feature"
                                  style={{ objectFit: "cover" }}
                                />
                              </figure>
                              <div
                                className={
                                  "content " + pageStyle.PostTitle
                                }
                              >
                                <div className="title is-5 has-text-light">
                                  {title}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        slug
        title
        createdAt(difference: "minutes")
        feature {
          file {
            url
          }
        }
      }
    }
  }
`
