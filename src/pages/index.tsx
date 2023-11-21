import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHeartbeat, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, graphql } from "gatsby";
import React from "react";
import {
  Columns,
  Container,
  Hero,
  Icon,
  Section,
} from "react-bulma-components";
import { Layout, NewsTile, Reviews, Seo } from "../components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Img from "gatsby-image";

const ratings = [
  {
    link: "https://www.google.com/search?sxsrf=ALeKk00VCh2E4hyk89Nj9ExwQPWMR02uAg%3A1586936272331&source=hp&ei=0LmWXob-EYWw0PEPtPiGsAs&q=family+psychiatry+and+wellness&oq=famil&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyAggAOgcIABCDARBDOgUIABCRAjoFCAAQgwE6BggAEAoQQ0oVCBcSETItMTczZzIzNmcyOTNnMzAySg0IGBIJMi0xZzFnMWcxUKLF_QJYnMb9AmCE0v0CaANwAHgAgAGgAogB4QaSAQUxLjAuM5gBAKABAaoBB2d3cy13aXo&sclient=psy-ab",
    icon: faGoogle,
    rating: 4.8,
  },
  {
    link: "https://www.facebook.com/www.familypsychiatry101.net/",
    icon: faFacebookSquare,
    rating: 4.1,
  },
  {
    link: "https://www.vitals.com/doctors/Dr_Sabira_Saifuddin/reviews",
    icon: faHeartbeat,
    rating: 5.0,
  },
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
                <div className="tw-space-y-10">
                  <h1 className="tw-font-playfair tw-text-6xl">
                    Family Psychiatry
                    <br />
                    Counseling & Wellness
                  </h1>

                  <div className="tw-space-y-6">
                    <p className="tw-font-nunito tw-text-xl tw-text-slate-500">
                      A comprehensive psychiatric clinic serving the mental &
                      emotional health needs of all members of the family. Our
                      mission is to help you live your best life.
                    </p>
                    <p className="tw-font-nunito tw-text-xl tw-text-slate-500">
                      We diagnose and treat a variety of mental health symptoms
                      and conditions—with or without medications. We also offer
                      transcranial magnetic stimulation (TMS) and ketamine
                      therapies.
                    </p>
                    <p className="tw-font-nunito tw-text-xl tw-text-slate-500">
                      We accept most commercial insurances. Same day
                      appointments available. Prescriptions are sent
                      electronically to your pharmacy
                    </p>
                  </div>

                  <div>
                    <Link to="/appointments">
                      <button className="tw-rounded-full tw-px-6 tw-py-4 tw-text-xl tw-font-nunito tw-font-bold tw-text-white tw-bg-gradient-to-r tw-from-[#48C744] tw-to-emerald-500">
                        Request an appointment
                      </button>
                    </Link>
                  </div>
                </div>
              </Columns.Column>
              <Columns.Column size={6}>
                <div className="tw-grid tw-grid-cols-2 tw-gap-y-8">
                  <Link to="/services" className="tw-justify-self-center">
                    <Card label="Services" feature={data.serviceSplash} />
                  </Link>
                  <Link
                    to="/library/telepsychiatry-telecounseling"
                    className="tw-justify-self-center"
                  >
                    <Card label="Telehealth" feature={data.telehealthSplash} />
                  </Link>
                  <Link to="/tms" className="tw-justify-self-center">
                    <Card
                      label="Transcranial Magnetic Stimulation (TMS)"
                      feature={data.tmsSplash}
                    />
                  </Link>
                  <Link to="/library" className="tw-justify-self-center">
                    <Card label="Health Library" feature={data.librarySplash} />
                  </Link>
                </div>
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
      <Section>
        <Container>
          <Columns centered={true}>
            <Columns.Column size={6}>
              <div className="tw-space-y-6">
                <h2 className="tw-font-playfair tw-text-5xl">
                  Holistic psychiatry for the mind, body and soul
                </h2>
                <p className="tw-font-nunito tw-text-lg">
                  At Family Psychiatry Counseling and Wellness, we specialize in
                  performing comprehensive psychiatric and psychological
                  evaluations to establish accurate diagnoses and prepare
                  individualized treatment plans. We combine advanced
                  conventional methods with safe alternative treatment
                  approaches to bring about lasting relief and improved quality
                  of life.
                </p>
              </div>
            </Columns.Column>
            <Columns.Column size={6} textAlign="center">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="tw-rounded-lg"
              />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
      <Section my={6}>
        <Container>
          <Columns>
            <Columns.Column size={6}>
              <div className="tw-space-y-6">
                <h2 className="tw-font-playfair tw-text-5xl">
                  What our patients are saying
                </h2>
                <Columns>
                  {ratings.map((rating) => (
                    <Columns.Column size={4}>
                      <Rating {...rating} />
                    </Columns.Column>
                  ))}
                </Columns>
              </div>
            </Columns.Column>
            <Columns.Column size={6}>
              <Reviews />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
      <Section>
        <Container py={6}>
          <div className="tw-space-y-6">
            <h2 className="tw-font-playfair tw-text-5xl">Health Resources</h2>
            <Columns>
              {data.newsPosts.nodes.map((post, i) => (
                <Columns.Column size={3} key={i}>
                  <Link to={`/library/${post.slug}`}>
                    <LongCard
                      label={post.title}
                      feature={post.feature}
                      excerpt={extractExcerptFromRichText(post.body.raw, 40)}
                    />
                  </Link>
                </Columns.Column>
              ))}
            </Columns>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

function Rating({ link, icon, rating }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="tw-flex tw-flex-row tw-items-center tw-gap-6">
          <Icon className="tw-text-[#48C744]">
            <FontAwesomeIcon icon={icon} size="2x" />
          </Icon>
          <div className="tw-flex tw-items-center">
            <div className="tw-text-slate-400 tw-font-bold tw-text-3xl">
              {rating.toFixed(1)}
            </div>
            {/* <Icon className="tw-text-[#48C744]">
              <FontAwesomeIcon icon={faStar} size="xs" />
            </Icon> */}
          </div>
        </div>
      </a>
    </div>
  );
}

function Card(props: { label: string; feature: any }) {
  return (
    <div className="tw-rounded-3xl tw-h-72 tw-w-72 tw-shadow tw-flex tw-flex-col tw-overflow-hidden">
      <GatsbyImage
        image={getImage(props.feature)!}
        alt="@todo"
        className="tw-shrink tw-grow"
      />
      <div className="tw-px-4 tw-py-2 tw-text-slate-600 tw-font-nunito tw-font-medium">
        {props.label}
      </div>
    </div>
  );
}

function LongCard(props: { label: string; feature: any; excerpt: string }) {
  return (
    <div className="tw-rounded-3xl tw-h-[36rem] tw-w-72 tw-shadow tw-flex tw-flex-col tw-overflow-hidden">
      <Img
        fluid={props.feature.fluid}
        key={props.feature.fluid.src}
        alt={props.feature.fluid.title}
        className="tw-shrink tw-grow tw-object-cover"
      />
      <div className="tw-flex-none tw-px-4 tw-py-6 tw-h-72 tw-space-y-2">
        <div className="tw-text-slate-600 tw-font-nunito tw-font-medium">
          {props.label}
        </div>
        <p className="tw-text-slate-500">{props.excerpt}</p>
      </div>
    </div>
  );
}

function extractExcerptFromRichText(raw: string, length: number): string {
  const document = JSON.parse(raw);
  const firstParagraph = document?.content.find(
    ({ nodeType }) => nodeType === "paragraph"
  );
  const firstText = firstParagraph?.content.find(
    ({ nodeType }) => nodeType === "text"
  );
  const excerpt = firstText?.value.split(" ").slice(0, length).join(" ");
  return excerpt
    ? `${excerpt}...`
    : "Excerpt could not be generated for this content.";
}

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
    telehealthSplash: file(
      relativePath: { eq: "images/telehealthsplash.jpg" }
    ) {
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
