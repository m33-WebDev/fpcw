import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import RichText from "../components/richtext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import * as pageStyle from "./providerprofile.module.scss";

function ProviderProfile({ data }) {
  const {
    name,
    credential,
    jobTitle,
    headshot,
    bio,
    description,
  } = data.contentfulProviderProfile;

  var metaTitle = "".concat(name, ", ", jobTitle, " | Providers");

  return (
    <Layout>
      <Seo title={metaTitle} description={description} />
      <div className="hero is-fullheight-with-navbar">
        <div className="columns">
          <div className="column is-6" style={{ position: "relative" }}>
            <div className={pageStyle.Frontmatter}>
              <GatsbyImage
                image={getImage(headshot)}
                alt="Headshot"
                style={{ objectFit: "cover", height: "100vmin" }}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="section">
              <div className="content">
                <h1
                  className="title"
                  style={{
                    borderBottom: "4px solid #48C774",
                    display: "inline-block",
                  }}
                >
                  {name}
                </h1>
                <div
                  className="subtitle has-background-success has-text-light"
                  style={{
                    display: "inline-block",
                    padding: "5px",
                    margin: "0px 5px",
                  }}
                >
                  {credential || jobTitle}
                </div>
                <div className={"mb-3 " + pageStyle.Body}>
                  <RichText src={bio} />
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
  );
}

export const query = graphql`
  query($pagePath: String!) {
    contentfulProviderProfile(slug: { eq: $pagePath }) {
      slug
      name
      credential
      jobTitle
      headshot {
        gatsbyImageData(width: 1000 placeholder: BLURRED)
      }
      description {
        description
      }
      bio {
        raw
      }
    }
  }
`;

export default ProviderProfile;
