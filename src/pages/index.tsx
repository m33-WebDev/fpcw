import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faHeartbeat, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, graphql } from "gatsby";
import React from "react";
import { Block, Button, Columns, Container, Heading, Hero, Icon, Level, Section, Tile } from "react-bulma-components";
import styled from "styled-components";
import { Layout, NewsTile, Reviews, Seo, SplashTile, Typography } from "../components";

const ratings = [
    {
        link: "https://www.google.com/search?sxsrf=ALeKk00VCh2E4hyk89Nj9ExwQPWMR02uAg%3A1586936272331&source=hp&ei=0LmWXob-EYWw0PEPtPiGsAs&q=family+psychiatry+and+wellness&oq=famil&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyAggAOgcIABCDARBDOgUIABCRAjoFCAAQgwE6BggAEAoQQ0oVCBcSETItMTczZzIzNmcyOTNnMzAySg0IGBIJMi0xZzFnMWcxUKLF_QJYnMb9AmCE0v0CaANwAHgAgAGgAogB4QaSAQUxLjAuM5gBAKABAaoBB2d3cy13aXo&sclient=psy-ab",
        icon: faGoogle,
        rating: 4.8
    },
    {
        link: "https://www.facebook.com/www.familypsychiatry101.net/",
        icon: faFacebookSquare,
        rating: 4.1
    },
    {
        link: "https://www.vitals.com/doctors/Dr_Sabira_Saifuddin/reviews",
        icon: faHeartbeat,
        rating: 5.0
    }
];

export function Head({ data }) {
    const title = data.contentfulPage.metaTitle;
    const description = data.contentfulPage.metaDescription.metaDescription;
    return <Seo title={title} description={description} />;
}

export default function Index({ data }) {
    return (
        <Layout>
            <Hero size="fullheight" hasNavbar={true}>
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column size={6}>
                                <Block>
                                    <Typography size="xxl">
                                        Family Psychiatry
                                        <br />
                                        Counseling and Wellness
                                    </Typography>
                                </Block>
                                <Link to="/appointments">
                                    <Button color="light">
                                        <Typography family="secondary" as="span" color="interactive">
                                            MAKE AN APPOINTMENT TODAY
                                        </Typography>
                                        <Icon>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </Icon>
                                    </Button>
                                </Link>
                                <Block>
                                    <Typography family="secondary" size="m" color="secondary">
                                        A comprehensive psychiatric clinic serving the mental & emotional health needs
                                        of all members of the family. Our mission is to help you live your best life.
                                    </Typography>

                                    <Typography family="secondary" size="m" color="secondary">
                                        We diagnose and treat a variety of mental health symptoms and conditions—with or
                                        without medications. We also offer TMS & Ketamine therapies.
                                    </Typography>
                                    <Typography family="secondary" size="m" color="secondary">
                                        We accept most commercial insurances. Same day appointments available.
                                        Prescriptions are sent electronically to your pharmacy
                                    </Typography>
                                </Block>
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <Tile kind="ancestor">
                                    <Tile className="tile is-vertical">
                                        <Tile className="tile">
                                            <Tile kind="parent">
                                                <FancyTile kind="child">
                                                    <SplashTile
                                                        title="Services"
                                                        image={data.serviceSplash}
                                                        to="/services"
                                                    />
                                                </FancyTile>
                                            </Tile>
                                            <Tile kind="parent">
                                                <Tile kind="child">
                                                    <SplashTile
                                                        title="Telehealth"
                                                        image={data.telehealthSplash}
                                                        to="/library/telepsychiatry-telecounseling"
                                                    />
                                                </Tile>
                                            </Tile>
                                        </Tile>
                                        <Tile className="tile">
                                            <Tile kind="parent">
                                                <Tile kind="child">
                                                    <SplashTile
                                                        title="Transcranial Magnetic Stimulation (TMS)"
                                                        image={data.tmsSplash}
                                                        to="/tms"
                                                    />
                                                </Tile>
                                            </Tile>
                                            <Tile kind="parent">
                                                <FancyTile kind="child">
                                                    <SplashTile
                                                        title="Health Library"
                                                        image={data.librarySplash}
                                                        to="/library"
                                                    />
                                                </FancyTile>
                                            </Tile>
                                        </Tile>
                                    </Tile>
                                </Tile>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
            <Section backgroundColor="grey-lighter">
                <Container>
                    <Columns vCentered={true} centered={true}>
                        <Columns.Column size={6}>
                            <Block>
                                <Typography as="h2" size="xl">
                                    Holistic Psychiatry for your Mind, Body and Soul
                                </Typography>
                            </Block>
                            <Typography family="secondary">
                                At Family Psychiatry Counseling and Wellness, we specialize in performing comprehensive
                                psychiatric and psychological evaluations to establish accurate diagnoses and prepare
                                individualized treatment plans. We combine advanced conventional methods with safe
                                alternative treatment approaches to bring about lasting relief and improved quality of
                                life.
                            </Typography>
                        </Columns.Column>
                        <Columns.Column size={6} textAlign="center">
                            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <Section my={6}>
                <Container>
                    <Columns>
                        <Columns.Column size={6}>
                            <Block>
                                <Typography as="h2" size="xl">
                                    What Our Patients Are Saying
                                </Typography>
                            </Block>
                            <Block>
                                <Columns>
                                    {ratings.map(rating => (
                                        <Columns.Column size={3}>
                                            <Rating {...rating} />
                                        </Columns.Column>
                                    ))}
                                </Columns>
                            </Block>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <Reviews />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <Section backgroundColor="grey-lighter">
                <Container py={6}>
                    <Block>
                        <Typography as="h2" size="xl">
                            Health Resources
                        </Typography>
                    </Block>
                    <Columns>
                        {data.newsPosts.nodes.map((post, i) => (
                            <Columns.Column size={3} key={i}>
                                <NewsTile post={post} />
                            </Columns.Column>
                        ))}
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

function Rating({ link, icon, rating }) {
    return (
        <Block>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Level>
                    <Level.Side align="left">
                        <Level.Item>
                            <Typography as="div" color="interactive">
                                <Icon>
                                    <FontAwesomeIcon icon={icon} size="2x" />
                                </Icon>
                            </Typography>
                        </Level.Item>
                    </Level.Side>
                    <Level.Side align="right">
                        <Level.Item>
                            <Typography as="span" size="l">
                                {rating.toFixed(1)}
                            </Typography>
                            <Typography as="span" size="l" color="interactive">
                                <Icon ml={2}>
                                    <FontAwesomeIcon icon={faStar} size="xs" />
                                </Icon>
                            </Typography>
                        </Level.Item>
                    </Level.Side>
                </Level>
            </a>
        </Block>
    );
}

const FancySubtitle = styled(Heading)`
    @media (min-width: 768px) {
        max-width: 30vw;
        text-align: left;
    }
`;

const FancyTile = styled(Tile)`
    min-height: 40vmin;
`;

const FancyDivider = styled.hr`
    background-color: #48c774;
    width: 15%;
    margin-left: auto;
    margin-right: auto;
    height: 5px;
`;

export const query = graphql`
    query {
        site {
            siteMetadata {
                shortTitle
            }
        }
        contentfulPage(title: { eq: "Home" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
        newsPosts: allContentfulPost(limit: 4) {
            nodes {
                slug
                title
                feature {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                    file {
                        url
                    }
                }
                body {
                    raw
                }
            }
        }
        serviceSplash: file(relativePath: { eq: "images/servicesplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
        telehealthSplash: file(relativePath: { eq: "images/telehealthsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
        tmsSplash: file(relativePath: { eq: "images/tmssplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
        librarySplash: file(relativePath: { eq: "images/librarysplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
    }
`;
