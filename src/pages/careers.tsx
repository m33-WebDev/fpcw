import { graphql } from "gatsby";
import React from "react";
import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { FormJobApplication, Layout, Seo, Typography } from "../components";

export function Head({ data }) {
    const title = data.contentfulPage.metaTitle;
    const description = data.contentfulPage.metaDescription.metaDescription;
    return <Seo title={title} description={description} />;
}

export default function Careers() {
    return (
        <Layout>
            <Section>
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            <Block>
                                <Typography as="h1" size="xxl">
                                    Careers
                                </Typography>
                            </Block>
                            <Content>
                                <Typography family="secondary">
                                    Want to join a team that is passionate about patient care? FPCW is expanding, and we
                                    are looking to meet great providers with various types of qualifications.
                                </Typography>
                                <br />
                                <Typography family="secondary">
                                    We offer competitive compensation, a fun work environment, and unparalleled
                                    work-life balance.
                                </Typography>
                                <br />
                                <Typography family="secondary">
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
