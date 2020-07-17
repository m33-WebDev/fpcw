import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiagnoses,
  faHeadSideVirus,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons"

export default ({ data }) => {
  const conditions = [
    "ADD, ADHD, ODD",
    "Anxiety, Panic Attacks, PTSD",
    "Depression",
    "Bipolar Disorder",
    "Substance Abuse, Addiction",
    "Dual Diagnosis",
    "Psychotic Disorders",
    "Developmental Delays",
    "and much more...",
  ]
  const psych = [
    "Psychiatric Evaluation",
    "Medication Management",
    "Psychotherapy",
    "Family Therapy",
    "Couples Counseling",
    "Anger Management",
    "Cognitive Behavior Therapy",
    "Social Skills Training",
    "Life Coaching",
    "Health, Wellness, Prevention",
    "Alternative Treatments",
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
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered is-variable is-6">
              <div className="column is-4">
                <div className="content">
                  <div className="has-text-centered">
                    <FontAwesomeIcon icon={faHeadSideVirus} size="3x" />
                  </div>
                  <h1 className="title is-4 has-text-centered">
                    Conditions Treated
                  </h1>
                  <p>
                    We offer expert diagnosis and treatment of most psychiatric
                    conditions, including:
                  </p>
                  <ul>
                    {conditions.map(p => (
                      <li>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="column is-4">
                <div className="content">
                  <div className="has-text-centered">
                    <FontAwesomeIcon icon={faUserMd} size="3x" />
                  </div>
                  <h1 className="title is-4 has-text-centered">
                    Services Offered
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
                </div>
              </div>
              <div className="column is-4">
                <div className="content">
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
                  <div className="column is-6">
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
                          <div className="media-content">
                            <div className="content">
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
