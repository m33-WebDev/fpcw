import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProviderSearch from "../components/providersearch"

import styles from "./providers.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="FPCW - Providers" />
      <section class="section">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-4" style={{ padding: "0 5vmin" }}>
            <div className="content has-text-centered">
              <h1
                className="title"
                style={{
                  borderBottom: "4px solid #48C774",
                  textAlign: "left",
                  paddingBottom: ".3em",
                }}
              >
                The Team
              </h1>
              <p className="is-size-5" style={{ textAlign: "left" }}>
                Our professional staff consists of board-certified, experienced
                psychiatrists, therapists, nurse practitioners, and others. We
                are, individually and collectively, committed to providing the
                highest quality care to our patients and to advancing wellness
                of the mind, body, and spirit.
              </p>
            </div>
          </div>
          <div className="column is-8">
            <div class={"columns is-multiline " + styles.ProviderList}>
              {data.allContentfulProviderProfile.nodes.map(
                ({ slug, name, headshot }) => {
                  return (
                    <div className="column is-4">
                      <Link to={slug}>
                        <div
                          className="card"
                          style={{ border: "4px solid #48C774" }}
                        >
                          <div className="card-image">
                            <figure className="image is-square">
                              <img
                                src={
                                  headshot
                                    ? headshot.file.url
                                    : "https://versions.bulma.io/0.5.3/images/placeholders/1280x960.png"
                                }
                                alt="Post Feature"
                                style={{ objectFit: "cover" }}
                              />
                            </figure>
                          </div>
                          <div
                            className="title is-4 has-text-light"
                            style={{
                              position: "absolute",
                              bottom: "0",
                              right: "0",
                              padding: "5px",
                              background: "#48C774",
                            }}
                          >
                            {name}
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
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProviderProfile {
      nodes {
        slug
        name
        title
        headshot {
          file {
            url
          }
        }
        createdAt(difference: "minutes")
      }
    }
  }
`
