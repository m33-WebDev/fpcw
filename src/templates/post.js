import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from '../components/richtext'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "./post.module.scss"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b>{text}</b>,
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
    [MARKS.CODE]: text => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  },
}

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
                  <img src={feature.file.url} style={{ objectFit: "cover" }} />
                </figure>
                <Link to="/library" className="has-text-success">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  {" Back to library"}
                </Link>
              </div>
              <div className="column is-6">
                <div className={styles.body}>
                  <RichText document={body.json}/>
                  <p>---</p>
                  <p style={{ fontStyle: "italic" }}>
                    If you are experiencing symptoms of mental or physical
                    distress and would like to discuss your
                    treatment options, schedule an appointment with one of our
                    providers today by using our{" "}
                    <Link to="/appointments/">online form</Link> or by calling
                    (805) 341-3416 during normal business hours.
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
