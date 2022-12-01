import React from "react";
import { Link, graphql } from "gatsby";
import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, Typography } from "../components";
import services from "../content/services.json";

export function Head({ data }) {
    const title = data.contentfulPage.metaTitle;
    const description = data.contentfulPage.metaDescription.metaDescription;
    return <Seo title={title} description={description} />;
}

export default function Services() {
    const { conditions, psychTreatments, altTreatments } = services;

    return (
        <Layout>
            <Section>
                <Container>
                    <Block>
                        <Typography as="h1" family="secondary" size="xxl">
                            Mental Health Services Provided at FPCW
                        </Typography>
                    </Block>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={6}>
                        <Columns.Column size={4}>
                            <Content>
                                <Typography as="h2" size="xl">
                                    Conditions Treated
                                </Typography>
                                <Typography>
                                    We offer expert diagnosis and treatment of most psychiatric conditions, including:
                                </Typography>
                                <ul>
                                    {conditions.map(service => (
                                        <Service service={service} />
                                    ))}
                                </ul>
                            </Content>
                        </Columns.Column>
                        <Columns.Column size={4}>
                            <Content>
                                <Typography as="h2" size="xl">
                                    Services Offered
                                </Typography>
                                <Typography>
                                    We offer counseling and treatment  for a full range of mental health conditiond
                                    including :
                                </Typography>
                                <ul>
                                    {psychTreatments.map(service => (
                                        <Service service={service} />
                                    ))}
                                </ul>
                            </Content>
                        </Columns.Column>
                        <Columns.Column size={4}>
                            <Content>
                                <Typography as="h2" size="xl">
                                    Wellness and Prevention
                                </Typography>
                                <Typography>
                                We provide holistic therapies to promote emotional  wellbeing :
                                </Typography>
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
    );
}

function Service({ service }) {
    return (
        <Typography as="li" key={service.name}>
            {service.article ? <Link to={`/library/${service.article}`}>{service.name}</Link> : service.name}
        </Typography>
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
