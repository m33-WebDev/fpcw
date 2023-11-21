import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import {
  Block,
  Columns,
  Container,
  Content,
  Section,
} from "react-bulma-components";
import styled from "styled-components";
import { Layout, Seo, Typography } from "../components";

export function Head({ data }) {
  const title = data.contentfulPage.metaTitle;
  const description = data.contentfulPage.metaDescription.metaDescription;
  return <Seo title={title} description={description} />;
}

export default function Providers({ data }) {
  const profiles = [].concat(
    data.profSabira,
    data.profPsych.nodes,
    data.profNP.nodes,
    data.profLMFT.nodes,
    data.profAdmin.nodes
  );

  return (
    <Layout>
      <Section>
        <Container>
          {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
          <Columns gap={4}>
            <Columns.Column size={4}>
              <FancyBlurb>
                <Block>
                  <Typography as="h1" size="xxl">
                    Find the Right Expert for Your Mental Health Needs
                  </Typography>
                </Block>
                <Content size="medium">
                  <Typography family="secondary">
                    Our professional staff consists of board-certified,
                    experienced psychiatrists, therapists, nurse practitioners,
                    and others. We are, individually and collectively, committed
                    to providing the highest quality care to our patients and to
                    advancing wellness of the mind, body, and spirit.
                  </Typography>
                </Content>
              </FancyBlurb>
            </Columns.Column>
            <Columns.Column size={8}>
              <Columns multiline={true}>
                {profiles.map(({ slug, name, credential, headshot }, i) => (
                  <Columns.Column size={4} key={i}>
                    <Link to={`/providers/${slug}`}>
                      <Card
                        label={`${name}${credential ? `, ${credential}` : ""}`}
                        feature={headshot}
                      />
                    </Link>
                  </Columns.Column>
                ))}
              </Columns>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
}

const FancyBlurb = styled.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: 15vh;
  }
`;

function Card(props: { label: string; feature: any }) {
  return (
    <div className="tw-rounded-3xl tw-h-72 tw-w-72 tw-shadow tw-flex tw-flex-col tw-overflow-hidden">
      <Img
        fluid={props.feature.fluid}
        key={props.feature.fluid.src}
        alt={props.feature.fluid.title}
        className="tw-shrink tw-grow"
      />
      <div className="tw-px-4 tw-py-2 tw-text-slate-600 tw-font-nunito tw-font-medium">
        {props.label}
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    contentfulPage(title: { eq: "Providers" }) {
      metaTitle
      metaDescription {
        metaDescription
      }
    }
    profSabira: contentfulProviderProfile(slug: { eq: "sabira-saifuddin" }) {
      slug
      name
      credential
      jobTitle
      headshot {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
    }
    profPsych: allContentfulProviderProfile(
      filter: { credential: { eq: "MD" }, slug: { ne: "sabira-saifuddin" } }
    ) {
      nodes {
        slug
        name
        credential
        jobTitle
        headshot {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    profNP: allContentfulProviderProfile(
      filter: { credential: { eq: "PMHNP" }, name: { nin: "Sabira Saifuddin" } }
    ) {
      nodes {
        slug
        name
        credential
        jobTitle
        headshot {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    profLMFT: allContentfulProviderProfile(
      filter: { credential: { eq: "LMFT" }, name: { nin: "Sabira Saifuddin" } }
    ) {
      nodes {
        slug
        name
        credential
        jobTitle
        headshot {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    profAdmin: allContentfulProviderProfile(
      filter: { credential: { nin: ["MD", "PMHNP", "LMFT"] } }
    ) {
      nodes {
        slug
        name
        credential
        jobTitle
        headshot {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
