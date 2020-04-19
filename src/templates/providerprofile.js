import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./providerprofile.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default ({ data, pageContext }) => {
  const { name, title, headshot } = data.contentfulProviderProfile

  return (
    <Layout>
      <SEO title={name} />
      <div className="hero is-fullheight-with-navbar">
        <div className="columns">
          <div className="column is-6">
            <figure className="image is-square">
              <img
                src={
                  headshot.file.url
                  // "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
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
                <p className="is-size-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div class="columns" style={{ minHeight: "40vmin" }}>
                  <div class="column">
                    <h1>Education</h1>
                    <p>Medical...</p>
                    <p>College...</p>
                  </div>
                  <div class="column">
                    <h1>Specialties</h1>
                    <p>Psychiatry...</p>
                    <p>Labwork...</p>
                    <p>Alternative...</p>
                  </div>
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
    }
  }
`
