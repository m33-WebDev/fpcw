import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiagnoses,
  faHeadSideVirus,
} from "@fortawesome/free-solid-svg-icons"

export default ({ data }) => {
  const psych = [
    "ADD/ADHD/ODD",
    "Anxiety",
    "Depression",
    "Bipolar Disorder",
    "Addiction",
    "Autism",
    "Psychotic Disorders",
  ]
  const wellbeing = [
    "Nutrition and Weight Management",
    "Metabolic Testing and Prevention",
    "Hormone Testing and Balancing",
    "Neurohormonal Testing",
    "Adrenal Fatigue Treatment",
    "Thyroid Balancing",
    "Detoxification and Chelation",
    "Lifestyle Coaching",
  ]

  return (
    <Layout>
      <SEO title="FPCW - Services" />
      <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered is-variable is-6">
              <div
                class="column is-4"
                style={{ marginTop: "auto", marginBottom: "auto" }}
              >
                <div class="content">
                  <h1
                    className="title is-size-3-mobile"
                    style={{
                      paddingBottom: ".3em",
                      borderBottom: "4px solid #48C774",
                    }}
                  >
                    Services Offered
                  </h1>
                  <p className="is-size-5">
                    At Family Psychiatry Counseling and Wellness we offer a
                    holistic set of services that combines traditional
                    counseling with alternative therapies. Together, our
                    treatments work to promote sound mental, physical, and
                    spiritual health.
                  </p>
                </div>
              </div>
              <div className="column is-4">
                <div class="content">
                  <div className="has-text-centered">
                    <FontAwesomeIcon icon={faHeadSideVirus} size="3x" />
                  </div>
                  <h1 className="title is-4 has-text-centered">
                    Psychiatric Therapies
                  </h1>
                  <p>
                    We offer counseling and treament for a full range of mental
                    health conditions including:
                  </p>
                  <ul>
                    {psych.map(p => (
                      <li>{p}</li>
                    ))}
                  </ul>
                  <p>
                    You can learn more about the mental conditions we treat{" "}
                    <Link to="/psychotherapy-and-counseling-services/">here</Link>.
                  </p>
                </div>
              </div>
              <div className="column is-4">
                <div class="content">
                  <div className="has-text-centered">
                    <FontAwesomeIcon icon={faDiagnoses} size="3x" />
                  </div>
                  <h1 className="title is-4 has-text-centered">
                    Wellness and Prevention
                  </h1>
                  <p>
                    We also offer a number of alternative therapies designed to
                    promote general wellbeing including:
                  </p>
                  <ul>
                    {wellbeing.map(p => (
                      <li>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* {data.services.nodes.map(({ slug, title, feature }) => {
                return (
                  <div class="column is-6">
                    <Link to={"/" + slug}>
                      <div className="box">
                        <article className="media">
                          <figure className="media-left">
                            <p className='image is-128x128'>
                              <img
                                src={
                                  feature
                                    ? feature.file.url
                                    : "https://bulma.io/images/placeholders/128x128.png"
                                }
                                alt="meh"
                              />
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p
                                className="subtitle"
                                style={{ padding: ".2em" }}
                              >
                                {title}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Link>
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     services: allContentfulService {
//       nodes {
//         slug
//         title
//         feature {
//           file {
//             url
//           }
//         }
//         createdAt(difference: "minutes")
//       }
//     }
//   }
// `
