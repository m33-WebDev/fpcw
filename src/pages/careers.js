import React from "react";
import { graphql } from "gatsby";
import { Columns, Container, Content, Heading, Section } from "react-bulma-components";
import { Layout, Seo, FormJobApplication } from "../components";

export default function Careers({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <>
            <Seo title={metaTitle} description={metaDescription} />
            <Layout>
                <Section>
                    <Container>
                        <Columns>
                            <Columns.Column size={3}>
                                <Heading size={1}>Careers</Heading>
                                <Content>
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
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <img
                                    alt="West Coast landscape"
                                    src="https://www.helpguide.org/wp-content/uploads/woman-on-couch-speaking-with-therapist.jpg"
                                />
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <FormJobApplication />
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </Layout>
        </>
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
