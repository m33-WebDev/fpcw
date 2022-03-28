import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Container, Heading, Section } from "react-bulma-components";
import { Layout, Seo, FormAppointment } from "../components";

const disclaimer1 =
    "This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes.";
const disclaimer2 =
    "\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours.";

export default function Appointments({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <>
            <Seo title={metaTitle} description={metaDescription} />
            <Layout>
                <Section>
                    <Container>
                        <Heading size={1}>Request an Appointment</Heading>
                        <FormAppointment />
                        <Disclaimer>
                            <p>{disclaimer1}</p>
                            <br />
                            <p>{disclaimer2}</p>
                        </Disclaimer>
                    </Container>
                </Section>
            </Layout>
        </>
    );
}

const Disclaimer = styled.div`
    margin-top: 2vmin;
    position: relative;
    border: 4px solid #48c774;
    padding: 2em;
    ::before {
        content: "note";
        padding: 2px 18px;
        margin-top: -4px;
        text-transform: uppercase;
        font-weight: lighter;
        position: absolute;
        top: 0;
        color: #48c774;
        background-color: #494949;
    }
`;

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
