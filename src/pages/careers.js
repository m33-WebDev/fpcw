import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormJobApplication from "../components/formjobapplication"

export default ({data}) => {

	var pageDescription = data.contentfulPage.metaDescription.metaDescription;

  return (
    <Layout>
      <SEO title="FPCW - Careers" description={pageDescription} />
      <div className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <div>
                  <h1 className="title is-1 is-size-3-mobile">Careers</h1>
                  <p>
                    Want to join a team that is passionate about patient care?
                    FPCW is expanding, and we are looking to meet great
                    providers with various types of qualifications.
                  </p>
                  <br />
                  <p>
                    We offer competitive compensation, a fun work environment,
                    and unparalleled work-life balance.
                  </p>
                  <br />
                  <p>
                    Interested in joining our team? Submit an application today!
                  </p>
                </div>
              </div>

              <div className="column is-6 is-hidden-mobile">
                <figure className="image is-4by3">
                  <img
                    style={{ objectFit: "cover" }}
                    alt="West Coast landscape"
                    src="https://www.helpguide.org/wp-content/uploads/woman-on-couch-speaking-with-therapist.jpg"
                  />
                </figure>
              </div>
              <div className="column is-3">
                <FormJobApplication />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
	query {
		contentfulPage(title: {eq: "Careers"}) {
			metaDescription {
				metaDescription
			}
		}
	}
`
