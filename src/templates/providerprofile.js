import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/richtext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default ({ data, pageContext }) => {
  const { name, title, headshot, bio } = data.contentfulProviderProfile

  return (
    <Layout>
      <SEO title={name} />
      <div className="hero is-fullheight-with-navbar">
        <div className="columns">
          <div className="column is-6">
            <figure className="image is-square">
              <img
                src={
                  headshot
                  ? headshot.file.url
                  : "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                }
                alt=""
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>
          <div className="column is-6">
            <div className="section">
              <div className="content">
                <div
                  className="title"
                  style={{
                    borderBottom: "4px solid #48C774",
                    display: "inline-block",
                  }}
                >
                  {name}
                </div>
                <div
                  className="subtitle has-background-success has-text-light"
                  style={{
                    display: "inline-block",
                    padding: "5px",
                    margin: "0px 5px",
                  }}
                >
                  {title}
                </div>
                <div className='mb-3'>
                  <RichText document={bio ? bio.json : bio} />
                </div>
                <Link to="/providers" className="has-text-success">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  {" Back to provider list"}
                </Link>
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
      bio {
        json
      }
    }
  }
`
