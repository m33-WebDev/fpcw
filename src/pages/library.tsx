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

export default function Library({ data }) {
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
                    The Health Library
                  </Typography>
                </Block>
                <Content size="medium">
                  <Typography family="secondary">
                    Read up on the conditions we treat, the treatments we offer,
                    and developments in the fields of psychiatry, mental health,
                    and wellness.
                  </Typography>
                </Content>
              </FancyBlurb>
            </Columns.Column>
            <Columns.Column size={8}>
              <Columns multiline={true}>
                {data.allContentfulPost.nodes.map(
                  ({ slug, title, feature }, i) => (
                    <Columns.Column size={4} key={i}>
                      <Link to={`/library/${slug}`}>
                        <Card label={title} feature={feature} />
                      </Link>
                    </Columns.Column>
                  )
                )}
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
    contentfulPage(title: { eq: "Library" }) {
      metaTitle
      metaDescription {
        metaDescription
      }
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        slug
        title
        createdAt(difference: "minutes")
        feature {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
