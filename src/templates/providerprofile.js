import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Sidebar from "../components/sidebar"
// import Seriesnav from "../components/seriesnav"
// import Toc from "../components/toc"
// import Projectfiles from "../components/projectfiles"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons"

import styles from "./providerprofile.module.scss"

export default ({ data, pageContext }) => {
  const { name, title, headshot } = data.contentfulProviderProfile

  return (
    <Layout>
      <SEO title={name} />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className={"title " + styles.Title}>{name}</div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-5by3">
                <img
                  src={headshot ? headshot.file.url : ""}
                  alt="alt"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                {/* <div
                  className={styles.Markdown}
                  dangerouslySetInnerHTML={{
                    __html: body.childMarkdownRemark.html,
                  }}
                /> */}
              </div>
            </div>
          </div>
        
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const providerQuery = graphql`
  query($pagePath: String!) {
    contentfulProviderProfile(slug: { eq: $pagePath }) {
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
`
