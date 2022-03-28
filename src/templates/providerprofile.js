import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Block, Columns, Container, Content, Heading, Icon, Level as span, Section } from "react-bulma-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Layout, Seo, RichText } from "../components";

export default function ProviderProfile({ data }) {
    const { name, credential, jobTitle, headshot, bio, description } = data.contentfulProviderProfile;
    const metaTitle = `${name}, ${jobTitle} | Providers`;

    return (
        <>
            <Seo title={metaTitle} description={description} />
            <Layout>
                <Section>
                    <Container>
                        <Columns gap={8}>
                            <Columns.Column size={6}>
                                <GatsbyImage image={getImage(headshot)} alt="Headshot" />
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <Block>
                                    <FancyName>{name}</FancyName>
                                    <Heading
                                        renderAs="span"
                                        subtitle={true}
                                        backgroundColor="success"
                                        textColor="light"
                                        p={1}
                                        m={2}
                                    >
                                        {credential || jobTitle}
                                    </Heading>
                                </Block>
                                <Content size="medium">
                                    <RichText src={bio} />
                                </Content>
                                <Link to="/providers">
                                    <Block display="flex" alignItems="center" textColor="success">
                                        <Icon>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </Icon>
                                        <span>Back to provider list</span>
                                    </Block>
                                </Link>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </Layout>
        </>
    );
}

const FancyName = styled(Heading)`
    border-bottom: 4px solid #48c774;
    display: inline-block;
`;

export const query = graphql`
    query ($pagePath: String!) {
        contentfulProviderProfile(slug: { eq: $pagePath }) {
            slug
            name
            credential
            jobTitle
            headshot {
                gatsbyImageData(width: 1000, placeholder: BLURRED)
            }
            description {
                description
            }
            bio {
                raw
            }
        }
    }
`;
