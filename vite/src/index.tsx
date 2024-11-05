import {
    Block,
    Button,
    Columns,
    Container,
    Hero,
    Icon,
    Level,
    Section,
} from "react-bulma-components";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faHandHoldingMedical,
    faChevronRight,
    faHeartbeat,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Layout, Seo, SplashTile, NewsTile, Reviews, Typography } from "./components";
import { ContentfulClient, Post, Review } from "./data";

const ratings = [
    {
        key: "google",
        link: "https://www.google.com/search?sxsrf=ALeKk00VCh2E4hyk89Nj9ExwQPWMR02uAg%3A1586936272331&source=hp&ei=0LmWXob-EYWw0PEPtPiGsAs&q=family+psychiatry+and+wellness&oq=famil&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyAggAOgcIABCDARBDOgUIABCRAjoFCAAQgwE6BggAEAoQQ0oVCBcSETItMTczZzIzNmcyOTNnMzAySg0IGBIJMi0xZzFnMWcxUKLF_QJYnMb9AmCE0v0CaANwAHgAgAGgAogB4QaSAQUxLjAuM5gBAKABAaoBB2d3cy13aXo&sclient=psy-ab",
        icon: faGoogle,
        rating: 4.8,
    },
    {
        key: "facebook",
        link: "https://www.facebook.com/www.familypsychiatry101.net/",
        icon: faFacebookSquare,
        rating: 4.1,
    },
    {
        key: "vitals",
        link: "https://www.vitals.com/doctors/Dr_Sabira_Saifuddin/reviews",
        icon: faHeartbeat,
        rating: 5.0,
    },
];

interface IndexProps {
    title: string;
    description: string;
    posts: Post[];
    reviews: Review[];
}

export async function query(): Promise<IndexProps> {
    const pageId = "6dHGP2shE0LRIUz9YgPAat";
    const client = new ContentfulClient();
    const page = await client.getPage(pageId);
    const posts = await client.getPosts();
    const reviews = await client.getReviews();
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
        posts: posts.slice(0, 3),
        reviews,
    };
}

export function Head(props: IndexProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Index(props: IndexProps) {
    return (
        <Layout>
            <Hero size="fullheight" hasNavbar={true}>
                <Hero.Body>
                    <Container>
                        <Columns vCentered={true}>
                            <Columns.Column size={6}>
                                <Block>
                                    <Typography $family="secondary" $size="xxl">
                                        Family Psychiatry
                                        <br />
                                        Counseling and Wellness
                                    </Typography>
                                </Block>
                                <a href="/appointments">
                                    <Button color="light">
                                        <Typography as="span" color="interactive">
                                            MAKE AN APPOINTMENT TODAY
                                        </Typography>
                                        <Icon>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </Icon>
                                    </Button>
                                </a>
                                <Block>
                                    <Typography $size="m" $color="secondary">
                                        A comprehensive psychiatric clinic serving the mental &
                                        emotional health needs of all members of the family. Our
                                        mission is to help you live your best life.
                                    </Typography>

                                    <Typography $size="m" $color="secondary">
                                        We diagnose and treat a variety of mental health symptoms
                                        and conditions—with or without medications. We also offer
                                        TMS & Ketamine therapies.
                                    </Typography>
                                    <Typography $size="m" $color="secondary">
                                        We accept most commercial insurances. Same day appointments
                                        available. Prescriptions are sent electronically to your
                                        pharmacy
                                    </Typography>
                                </Block>
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <Columns>
                                    <Columns.Column size={6} style={{ minHeight: "40vmin" }}>
                                        <SplashTile
                                            title="Services"
                                            image="./images/servicesplash.jpg"
                                            to="/services"
                                        />
                                    </Columns.Column>
                                    <Columns.Column size={6} style={{ minHeight: "40vmin" }}>
                                        <SplashTile
                                            title="Telehealth"
                                            image="./images/telehealthsplash.jpg"
                                            to="/library/telepsychiatry-telecounseling"
                                        />
                                    </Columns.Column>
                                    <Columns.Column size={6} style={{ minHeight: "40vmin" }}>
                                        <SplashTile
                                            title="Transcranial Magnetic Stimulation (TMS)"
                                            image="./images/tmssplash.jpg"
                                            to="/tms"
                                        />
                                    </Columns.Column>
                                    <Columns.Column size={6} style={{ minHeight: "40vmin" }}>
                                        <SplashTile
                                            title="Health Library"
                                            image="./images/librarysplash.jpg"
                                            to="/library"
                                        />
                                    </Columns.Column>
                                </Columns>
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
                            <Typography as="h2" $family="secondary" $size="xl">
                                Holistic Psychiatry for your Mind, Body and Soul
                            </Typography>
                        </Block>
                        <Typography>
                            At Family Psychiatry Counseling and Wellness, we specialize in
                            performing comprehensive psychiatric and psychological evaluations to
                            establish accurate diagnoses and prepare individualized treatment plans.
                            We combine advanced conventional methods with safe alternative treatment
                            approaches to bring about lasting relief and improved quality of life.
                        </Typography>
                    </Columns.Column>
                </Columns>
            </Section>
            <Section my={6}>
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            <Typography as="h2" $family="secondary" $size="xl">
                                What Our Patients Are Saying
                            </Typography>
                        </Columns.Column>
                        <Columns.Column size={1} />
                        <Columns.Column size={2}>
                            {ratings.map((rating) => (
                                <Rating
                                    key={rating.key}
                                    link={rating.link}
                                    icon={rating.icon}
                                    rating={rating.rating}
                                />
                            ))}
                        </Columns.Column>
                        <Columns.Column size={1} />
                        <Columns.Column size={4}>
                            <Reviews reviews={props.reviews} />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <Section backgroundColor="grey-lighter">
                <Container py={6}>
                    <Block textAlign="center">
                        <Typography as="h2" $family="secondary" $size="xl">
                            Health Resources
                        </Typography>
                    </Block>
                    <FancyDivider />
                    <Columns centered={true}>
                        {props.posts.map((post, i) => (
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

function Rating({ link, icon, rating }: { link: string; icon: IconDefinition; rating: number }) {
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
                            <Typography as="span" $size="l">
                                {rating.toFixed(1)}
                            </Typography>
                            <Typography as="span" $size="l" color="interactive">
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

const FancyDivider = styled.hr`
    background-color: #48c774;
    width: 15%;
    margin-left: auto;
    margin-right: auto;
    height: 5px;
`;
