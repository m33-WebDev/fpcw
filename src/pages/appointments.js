import React from "react";
import { graphql } from "gatsby";

import { Layout, Seo, FormAppointment } from "../components";

import * as styles from "./appointments.module.scss";

const disclaimer1 =
    "This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes.";
const disclaimer2 =
    "\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours.";

function Appointments({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <Layout>
            <Seo title={metaTitle} description={metaDescription} />

            <div className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-size-1 is-size-3-mobile">Request an Appointment</h1>
                        <FormAppointment />
                        <div className={styles.disclaimer}>
                            <p>{disclaimer1}</p>
                            <br />
                            <p>{disclaimer2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulPage(title: { eq: "Appointments" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
    }
`;

export default Appointments;
