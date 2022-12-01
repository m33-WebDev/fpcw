import React from "react";
import { Link, graphql } from "gatsby";
import { Block, Button, Columns, Container, Heading, Hero, Icon, Level, Section, Tile } from "react-bulma-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHandHoldingMedical, faChevronRight, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Layout, Seo, SplashTile, NewsTile, Reviews, Typography } from "../components";

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
                        <Columns vCentered={true}>
                            <Columns.Column size={6}>
                                <Block>
                                    <Typography family="secondary" size="xxl">
                                        Family Psychiatry<br />
                                        Counseling and Wellness Test
                                    </Typography>
                                </Block>
                                <Link to="/appointments">
                                    <Button color="light">
                                        <Typography as="span" color="interactive">
                                             MAKE AN APPOINTMENT TODAY 123
                                        </Typography>
                                        <Icon>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </Icon>
                                    </Button>
                                </Link>
                                <Block>
                                    <Typography size="m" color="secondary">
                                        A comprehensive psychiatric clinic serving the mental & emotional health needs of all members of the family. 
                                        Our mission is to help you live your best life. 
                                    </Typography>

                                    <Typography size="m" color="secondary">
                                        We diagnose and treat a variety of mental health symptoms and 
                                        conditions—with or without medications. We also offer TMS & Ketamine therapies. 
                                    </Typography>
                                    <Typography size="m" color="secondary">
                                        We accept most commercial insurances. 
                                        Same day appointments available. Prescriptions are sent electronically to your pharmacy    
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
                <Columns vCentered={true} centered={true}>
                    <Columns.Column size={2} textAlign="center">
                        <FontAwesomeIcon icon={faHandHoldingMedical} size="8x" />
                    </Columns.Column>
                    <Columns.Column size={6}>
                        <Block>
                            <Typography as="h2" family="secondary" size="xl">
                                Holistic Psychiatry for your Mind, Body and Soul
                            </Typography>
                        </Block>
                        <Typography>
                            At Family Psychiatry Counseling and Wellness, we specialize in performing comprehensive
                            psychiatric and psychological evaluations to establish accurate diagnoses and prepare
                            individualized treatment plans. We combine advanced conventional methods with safe
                            alternative treatment approaches to bring about lasting relief and improved quality of life.
                        </Typography>
                    </Columns.Column>
                </Columns>
            </Section>
            <Section my={6}>
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            <Typography as="h2" family="secondary" size="xl">
                                What Our Patients Are Saying
                            </Typography>
                        </Columns.Column>
                        <Columns.Column size={1} />
                        <Columns.Column size={2}>
                            {ratings.map(rating => (
                                <Rating {...rating} />
                            ))}
                        </Columns.Column>
                        <Columns.Column size={1} />
                        <Columns.Column size={4}>
                            <Reviews />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <Section backgroundColor="grey-lighter">
                <Container py={6}>
                    <Block textAlign="center">
                        <Typography as="h2" family="secondary" size="xl">
                            Health Resources
                        </Typography>
                    </Block>
                    <FancyDivider />
                    <Columns centered={true}>
                        {data.newsPosts.nodes.map((post, i) => (
                            <Columns.Column size={3} key={i}>
                                <NewsTile post={post} />
                            </Columns.Column>
                        ))}
                    </Columns>
                    <FancyDivider />
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
                                    <FontAwesomeIcon icon={icon} size="3x" />
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
        newsPosts: allContentfulPost(limit: 3) {
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
