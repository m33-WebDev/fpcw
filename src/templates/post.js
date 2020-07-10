import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/richtext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "./post.module.scss"

export default ({ data, pageContext }) => {
  const { title, feature, body } = data.contentfulPost

  return (
    <Layout>
      <SEO title={title} />
      <div className="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <div className="columns is-centered is-desktop is-variable is-8">
              <div class="column is-6">
                <div className="content">
                  <div className={"title"} style={{ textAlign: "left" }}>
                    {title}
                  </div>
                </div>
                <figure
                  className="image is-4by3"
                  style={{ marginBottom: "5vmin" }}
                >
                  <img src={feature.file.url} alt="Post feature" style={{ objectFit: "cover" }} />
                </figure>
                <Link to="/library" className="has-text-success">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  {" Back to library"}
                </Link>
              </div>
              <div className="column is-6">
                <div className={styles.body}>
                  <RichText document={body.json} />
                  <p>---</p>
                  <p style={{ fontStyle: "italic" }}>
                    If you are experiencing symptoms of mental or physical
                    distress and would like to discuss your treatment options,
                    schedule an appointment with one of our providers today by
                    using our <Link to="/appointments/">online form</Link> or by
                    calling (805) 341-3416 during normal business hours.
                  </p>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pagePath: String!) {
    contentfulPost(slug: { eq: $pagePath }) {
      slug
      title
      feature {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`
