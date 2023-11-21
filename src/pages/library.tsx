import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import {
  Block,
  Card,
  Columns,
  Container,
  Content,
  Heading,
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
                        <FancyCard>
                          <FancyPostImage
                            fluid={feature.fluid}
                            key={feature.fluid.src}
                            alt={feature.fluid.title}
                          />
                          <FancyPostTitle>
                            <Typography family="secondary">{title}</Typography>
                          </FancyPostTitle>
                        </FancyCard>
                      </Link>
                    </Columns.Column>
                  ),
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

const FancyHeading = styled(Heading)`
  border-bottom: 4px solid #48c774;
  text-align: left;
  padding-bottom: 0.3em;
`;

const FancyCard = styled(Card)`
  @media (max-width: 769px) {
    height: 70vmin;
  }
  @media (min-width: 769px) {
    height: 30vmin;
  }
`;

const FancyPostTitle = styled.div`
  border: 3px solid #48c774;
  border-right: 0px;

  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.3em;
  text-align: left;
  background: rgba(72, 199, 116, 0.7);
  max-width: 70%;
`;

const FancyPostImage = styled(Img)`
  height: 100%;
`;

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
