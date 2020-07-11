import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./providers.module.scss"

export default ({ data }) => {
  function createProfileCard(profile, i) {
    var { slug, name, headshot } = profile
    return (
      <div className="column is-4" key={i}>
        <Link to={slug ? "/" + slug : "/"}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-square">
                <img
                  src={
                    headshot
                      ? headshot.file.url
                      : "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
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
                bottom: "0.5em",
                right: "0",
                width: "auto",
                padding: "5px",
                background:
                  "linear-gradient(to top, rgb(64, 64, 64, .8), rgb(0,0,0, 0))",
                borderBottom: "3px solid #48C774",
              }}
            >
              {name}
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <Layout>
      <SEO title="FPCW - Providers" />
      <div className="hero is-fullheight-with-navbar">
        <div className="hero-body">
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
                  Our professional staff consists of board-certified,
                  experienced psychiatrists, therapists, nurse practitioners,
                  and others. We are, individually and collectively, committed
                  to providing the highest quality care to our patients and to
                  advancing wellness of the mind, body, and spirit.
                </p>
              </div>
            </div>
            <div className="column is-8">
              <div className={"columns is-multiline " + styles.ProviderList}>
                {createProfileCard(data.profSabira, 0)}
                {data.profProfessional.nodes.map((profile, i) => {
                  return createProfileCard(profile, i)
                })}
                {data.profAdmin.nodes.map((profile, i) => {
                  return createProfileCard(profile, i)
                })}
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
    profSabira: contentfulProviderProfile(name: { eq: "Sabira Saifuddin" }) {
      slug
      name
      title
      headshot {
        file {
          url
        }
      }
    }
    profProfessional: allContentfulProviderProfile(
      filter: {
        title: { nin: ["Support Staff", "Front Desk", "Practice Manager"] }
        name: { nin: "Sabira Saifuddin" }
      }
    ) {
      nodes {
        slug
        name
        title
        headshot {
          file {
            url
          }
        }
      }
    }
    profAdmin: allContentfulProviderProfile(
      filter: {
        title: { in: ["Support Staff", "Front Desk", "Practice Manager"] }
      }
    ) {
      nodes {
        slug
        name
        title
        headshot {
          file {
            url
          }
        }
      }
    }
  }
`
