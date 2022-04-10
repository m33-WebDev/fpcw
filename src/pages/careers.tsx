import React from "react";
import { graphql } from "gatsby";
import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, FormJobApplication, Typography } from "../components";

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
                                <Block>
                                    <Typography as="h1" family="secondary" size="xxl">
                                        Careers
                                    </Typography>
                                </Block>
                                <Content>
                                    <Typography>
                                        Want to join a team that is passionate about patient care? FPCW is expanding,
                                        and we are looking to meet great providers with various types of qualifications.
                                    </Typography>
                                    <br />
                                    <Typography>
                                        We offer competitive compensation, a fun work environment, and unparalleled
                                        work-life balance.
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Interested in joining our team? Submit an application today!
                                    </Typography>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <img
                                    alt="Woman speaking with therapist"
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
