import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagnoses, faHeadSideVirus, faUserMd } from "@fortawesome/free-solid-svg-icons";

import servicesData from "../content/services.json";

function createService(item) {
    if (item && item.article) {
        return (
            <li key={item.name}>
                <Link href={item.article ? "/library/" + item.article : ""}>{item.name}</Link>
            </li>
        );
    } else {
        return <li key={item.name}>{item.name}</li>;
    }
}

function Services({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <Layout>
            <Seo title={metaTitle} description={metaDescription} />

            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-size-1 is-size-3-mobile" style={{ marginBottom: "8vmin" }}>
                        Mental Health Services Provided at FPCW
                    </h1>
                    <div className="columns is-centered is-variable is-6">
                        <div className="column is-4">
                            <div className="content">
                                <div className="has-text-centered">
                                    <FontAwesomeIcon icon={faHeadSideVirus} size="3x" />
                                </div>
                                <h2 className="title is-4 has-text-centered">Conditions Treated</h2>
                                <p>
                                    We offer expert diagnosis and treatment of most psychiatric conditions, including:
                                </p>
                                <ul>{servicesData.conditions.map(cond => createService(cond))}</ul>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="content">
                                <div className="has-text-centered">
                                    <FontAwesomeIcon icon={faUserMd} size="3x" />
                                </div>
                                <h2 className="title is-4 has-text-centered">Services Offered</h2>
                                <p>
                                    We offer counseling and treament for a full range of mental health conditions
                                    including:
                                </p>
                                <ul>{servicesData.psychTreatments.map(treat => createService(treat))}</ul>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="content">
                                <div className="has-text-centered">
                                    <FontAwesomeIcon icon={faDiagnoses} size="3x" />
                                </div>
                                <h2 className="title is-4 has-text-centered">Wellness and Prevention</h2>
                                <p>
                                    We also offer a number of alternative therapies designed to promote general
                                    wellbeing including:
                                </p>
                                <ul>{servicesData.altTreatments.map(treat => createService(treat))}</ul>
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
        contentfulPage(title: { eq: "Services" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
    }
`;

export default Services;
