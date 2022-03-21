import React from "react";
import { graphql } from "gatsby";

import { Layout, Seo, FormJobApplication } from "../components";

function Careers({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <Layout>
            <Seo title={metaTitle} description={metaDescription} />
            <div className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-3">
                                <div>
                                    <h1 className="title is-1 is-size-3-mobile">Careers</h1>
                                    <p>
                                        Want to join a team that is passionate about patient care? FPCW is expanding,
                                        and we are looking to meet great providers with various types of qualifications.
                                    </p>
                                    <br />
                                    <p>
                                        We offer competitive compensation, a fun work environment, and unparalleled
                                        work-life balance.
                                    </p>
                                    <br />
                                    <p>Interested in joining our team? Submit an application today!</p>
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
    );
}

export const query = graphql`
    query {
        contentfulPage(title: { eq: "Careers" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
    }
`;

export default Careers;
