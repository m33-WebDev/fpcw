import React from "react"
import { Link, graphql } from "gatsby"
// import HyvorTalk from "hyvor-talk-react"

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

// import "../styles/code.scss"
// import styles from "./post-basic.module.scss"

export default ({ data, pageContext }) => {
  const { title, feature, body } = data.contentfulNewsPost

  return (
    <Layout>
      <SEO title={title} />
      <section class="section">
        <div class="columns is-centered">
          <div class="column is-6">
            <div className="container">
              <div className="content">
                <div className={"title"}>{title}</div>
              </div>
              <figure className='image is-4by3'>
                  <img src={feature.file.url}/>
              </figure>

              {/* <div className="card-image">
                <figure className="image is-5by3">
                  <img
                    src={image ? image.file.url : ""}
                    alt="alt"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <div
                    className={styles.Markdown}
                    dangerouslySetInnerHTML={{
                      __html: body.childMarkdownRemark.html,
                    }}
                  />
                  <div className="level">
                    <div className="level-right">
                      <div className="level-item">
                        {beforePost && (
                          <Link
                            to={beforePost.slug}
                            className={styles.SeriesNavInline}
                          >
                            <div className="level is-mobile">
                              <div className="level-item">
                                <FontAwesomeIcon icon={faChevronLeft} />
                              </div>
                              <div className="level-item">{beforePost.title}</div>
                            </div>
                          </Link>
                        )}{" "}
                      </div>
                    </div>
                    <div className="level-left">
                      <div className="level-item">
                        {afterPost && (
                          <Link
                            to={afterPost.slug}
                            className={styles.SeriesNavInline}
                          >
                            <div className="level is-mobile">
                              <div className="level-item">{afterPost.title}</div>
                              <div className="level-item">
                                <FontAwesomeIcon icon={faChevronRight} />
                              </div>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr style={{ marginTop: "8vmin", marginBottom: "8vmin" }} />
                  <HyvorTalk.Embed websiteId={292} />
                </div>
              </div> */}

              <div />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pagePath: String!) {
    contentfulNewsPost(slug: { eq: $pagePath }) {
      slug
      title
      feature {
        file {
          url
        }
      }
    }
  }
`
