import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplashTile from "../components/splashtile"
import NewsTile from "../components/newstile"
import Carousel from "../components/carousel"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar,
  faHandHoldingMedical,
  faChevronRight,
  faHeartbeat,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons"

import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons"

import styles from "./index.module.scss"

export default ({ data }) => {
  function getNewsTiles() {
    var tiles = []

    for (var i = 0; i < 3; ++i) {
      tiles.push(
        <div className="column is-3" key={i} style={{ height: "100%" }}>
          <NewsTile post={data.newsPosts.nodes[i]} style={{ height: "100%" }} />
        </div>
      )
    }

    return tiles
  }

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <section className="hero is-light is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container" style={{ height: "100%" }}>
            <div className="columns is-vcentered" style={{ height: "100%" }}>
              <div
                className="column is-6"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div>
                  <h1 className="title is-1 is-size-3-mobile">
                    Family Psychiatry <br />
                    Counseling & Wellness
                  </h1>
                  <h2 className={"subtitle is-size-4 mt-3 mb-5 " + styles.splashSubtitle} style={{fontWeight: 'lighter'}}>
                    A comprehensive, integrative psychiatric and wellness clinic
                    serving the mental, physical, emotional and preventative
                    health needs of all members of the family. Find better, one
                    step at a time.
                  </h2>
                  <Link to="/appointments" className="has-text-white">
                    <button className="button is-success">
                      {" "}
                      <p>Schedule an appointment today</p>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ marginLeft: ".8em" }}
                      />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="column is-6">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent">
                        <div
                          className="tile is-child"
                          style={{ minHeight: "40vmin" }}
                        >
                          <SplashTile
                            title="Services"
                            image="https://anewerapsychiatry.com/wp-content/uploads/2019/06/outpatient-psychiatric-services-550x321.jpg"
                            to="/services/"
                          />
                        </div>
                      </div>{" "}
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          <SplashTile
                            title="Telehealth"
                            image="https://www.ciproms.com/wp-content/uploads/2020/03/Telehealth-600x400.jpg"
                            to="/telepsychiatry-telecounseling"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tile">
                      <div className="tile is-parent">
                        <div
                          className="tile is-child"
                          style={{ minHeight: "40vmin" }}
                        >
                          <SplashTile
                            title="Health Library"
                            image="https://freedesignfile.com/upload/2018/01/Brain-infographic-template-vector-01.jpg"
                            to="/library/"
                          />
                        </div>
                      </div>{" "}
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          <SplashTile
                            title="Locations"
                            image="https://42floors.com/images/Hd8216713d023e525024253c5987cddc2ea7287bfS1560x1040W0seB505153O/978a35bfd12f5e9a8c8c547cf2dc17a0d003d928"
                            to="/locations/"
                          />
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero has-background-grey-lighter">
        <div className="hero-body">
          <div className="columns is-vcentered is-centered is-desktop">
            <div className="column is-2 has-text-centered">
              <FontAwesomeIcon
                icon={faHandHoldingMedical}
                size="8x"
                className="is-size-3-mobile"
              />
            </div>
            <div className="column is-6">
              <div className="title">
                {" "}
                Holistic Psychiatry for your Mind, Body & Soul{" "}
              </div>
              <div
                className="content is-size-5 is-size-6-mobile">
                At Family Psychiatry Counseling & Wellness, we specialize in
                performing comprehensive psychiatric and psychological
                evaluations to establish accurate diagnoses and prepare
                individualized treatment plans. We combine advanced conventional
                methods with safe alternative treatment approaches to bring
                about lasting relief and improved quality of life.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-light">
        <div className="hero-body">
          <section className="section">
            <div className="container" style={{ height: "100%" }}>
              <div
                className="columns is-desktop is-fullheight"
                style={{ height: "100%" }}
              >
                <div className="column is-3">
                  <div className="">
                    <h1
                      className="title is-1 is-size-3-mobile has-text-centered-mobile"
                      style={{ textAlign: "left" }}
                    >
                      What Our Patients Are Saying
                    </h1>
                  </div>
                </div>

                <div className="column is-1" />
                <div className="column is-2">
                  <a
                    href="https://www.google.com/search?sxsrf=ALeKk00VCh2E4hyk89Nj9ExwQPWMR02uAg%3A1586936272331&source=hp&ei=0LmWXob-EYWw0PEPtPiGsAs&q=family+psychiatry+and+wellness&oq=famil&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyAggAOgcIABCDARBDOgUIABCRAjoFCAAQgwE6BggAEAoQQ0oVCBcSETItMTczZzIzNmcyOTNnMzAySg0IGBIJMi0xZzFnMWcxUKLF_QJYnMb9AmCE0v0CaANwAHgAgAGgAogB4QaSAQUxLjAuM5gBAKABAaoBB2d3cy13aXo&sclient=psy-ab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="level">
                      <div className="level-item has-text-success">
                        <FontAwesomeIcon icon={faGoogle} size="3x" />
                      </div>
                      <div className="level-item title">
                        4.8
                        <FontAwesomeIcon
                          icon={faStar}
                          size="xs"
                          style={{ marginLeft: ".2em" }}
                        />
                      </div>
                    </div>
                  </a>
                  <hr />
                  <a
                    href="https://www.facebook.com/www.familypsychiatry101.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="level">
                      <div className="level-item has-text-success">
                        <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                      </div>
                      <div className="level-item title">
                        4.1
                        <FontAwesomeIcon
                          icon={faStar}
                          size="xs"
                          style={{ marginLeft: ".2em" }}
                        />
                      </div>
                    </div>
                  </a>
                  <hr />
                  <a
                    href="https://www.vitals.com/doctors/Dr_Sabira_Saifuddin/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="level">
                      <div className="level-item  has-text-success">
                        <FontAwesomeIcon icon={faHeartbeat} size="3x" />
                      </div>
                      <div className="level-item title">
                        5.0
                        <FontAwesomeIcon
                          icon={faStar}
                          size="xs"
                          style={{ marginLeft: ".2em" }}
                        />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="column is-1" />
                <div className="column is-4">
                  <Carousel />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="hero has-background-grey-lighter is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="content has-text-centered">
              <div>
                <FontAwesomeIcon
                  icon={faStethoscope}
                  size="3x"
                  className="is-size-3-mobile"
                />

                <h1 className="title is-2 is-size-3-mobile">
                  Health Resources
                </h1>
              </div>
            </div>
            <hr
              style={{
                backgroundColor: "#48C774",
                width: "15%",
                marginLeft: "auto",
                marginRight: "auto",
                height: "5px",
              }}
            />
            <div className="columns is-centered">{getNewsTiles()}</div>
            <hr
              style={{
                backgroundColor: "#48C774",
                width: "15%",
                marginLeft: "auto",
                marginRight: "auto",
                height: "5px",
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        shortTitle
      }
    }
    newsPosts: allContentfulPost {
      nodes {
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
  }
`

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         tipOfTheWeek
//         shortTitle
//       }
//     }
//     allPosts: allContentfulBlogPost {
//       edges {
//         node {
//           slug
//           title
//           id
//           image {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//     newestPosts: allContentfulBlogPost(
//       filter: { tags: { nin: ["insider", "devlog", "series", "nokternel-style-guide"] } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       nodes {
//         slug
//         title
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//     insiderPosts: allContentfulBlogPost(
//       filter: { tags: { in: "insider" } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       nodes {
//         slug
//         title
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//     editorPosts: allContentfulBlogPost(
//       filter: { tags: { in: "editor" } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       nodes {
//         slug
//         title
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//     nokternelStyleGuide: contentfulBlogPost(slug: { eq: "nokternel-style-guide" }) {
//       title
//       slug
//       image {
//         file {
//           url
//         }
//       }
//     }
//     projectSpudDevlog: contentfulBlogPost(slug: { eq: "devlog-project-spud" }) {
//       slug
//       image {
//         file {
//           url
//         }
//       }
//     }
//     beginnersGuide: contentfulBlogPost(
//       series: { eq: "Beginner's Guide" }
//       seriesNum: { eq: 0 }
//     ) {
//       title
//       slug
//       image {
//         file {
//           url
//         }
//       }
//     }
//   }
// `
