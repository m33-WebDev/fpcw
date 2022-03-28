import React from "react";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagnoses, faHeadSideVirus, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { Block, Columns, Container, Content, Heading, Section } from "react-bulma-components";
import { Layout, Seo } from "../components";
import services from "../content/services.json";

export default function Services({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;
    const { conditions, psychTreatments, altTreatments } = services;

    return (
        <>
            <Seo title={metaTitle} description={metaDescription} />
            <Layout>
                <Section>
                    <Container>
                        <Heading size={1} mb={6}>
                            Mental Health Services Provided at FPCW
                        </Heading>
                        <Columns gap={6}>
                            <Columns.Column size={4}>
                                <Content>
                                    <Block textAlign="center">
                                        <FontAwesomeIcon icon={faHeadSideVirus} size="3x" />
                                    </Block>
                                    <Heading size={4} renderAs="h2" textAlign="center">
                                        Conditions Treated
                                    </Heading>
                                    <p>
                                        We offer expert diagnosis and treatment of most psychiatric conditions,
                                        including:
                                    </p>
                                    <ul>
                                        {conditions.map(service => (
                                            <Service service={service} />
                                        ))}
                                    </ul>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={4}>
                                <Content>
                                    <Block textAlign="center">
                                        <FontAwesomeIcon icon={faUserMd} size="3x" />
                                    </Block>
                                    <Heading size={4} renderAs="h2" textAlign="center">
                                        Services Offered
                                    </Heading>
                                    <p>
                                        We offer counseling and treament for a full range of mental health conditions
                                        including:
                                    </p>
                                    <ul>
                                        {psychTreatments.map(service => (
                                            <Service service={service} />
                                        ))}
                                    </ul>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={4}>
                                <Content>
                                    <Block textAlign="center">
                                        <FontAwesomeIcon icon={faDiagnoses} size="3x" />
                                    </Block>
                                    <Heading size={4} renderAs="h2" textAlign="center">
                                        Wellness and Prevention
                                    </Heading>
                                    <p>
                                        We also offer a number of alternative therapies designed to promote general
                                        wellbeing including:
                                    </p>
                                    <ul>
                                        {altTreatments.map(service => (
                                            <Service service={service} />
                                        ))}
                                    </ul>
                                </Content>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </Layout>
        </>
    );
}

function Service({ service }) {
    return (
        <li key={service.name}>
            {service.article ? <Link to={`/library/${service.article}`}>{service.name}</Link> : service.name}
        </li>
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
