import { graphql } from "gatsby";
import React from "react";
import { Block, Container, Section } from "react-bulma-components";
import styled from "styled-components";
import { AppointmentForm, Layout, Seo, Typography } from "../components";

const disclaimer1 =
    "This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes.";
const disclaimer2 =
    "\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours.";

export function Head({ data }) {
    const title = data.contentfulPage.metaTitle;
    const description = data.contentfulPage.metaDescription.metaDescription;
    return <Seo title={title} description={description} />;
}

export default function Appointments() {
    return (
        <Layout>
            <Section>
                <Container>
                    <Block>
                        <Typography as="h1" size="xxl">
                            Request an Appointment
                        </Typography>
                    </Block>
                    <AppointmentForm />
                    <Disclaimer>
                        <Typography family="secondary">{disclaimer1}</Typography>
                        <br />
                        <Typography family="secondary">{disclaimer2}</Typography>
                    </Disclaimer>
                </Container>
            </Section>
        </Layout>
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
