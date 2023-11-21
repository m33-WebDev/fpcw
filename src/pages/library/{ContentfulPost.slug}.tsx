import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import {
  Block,
  Columns,
  Container,
  Content,
  Section,
} from "react-bulma-components";
import {
  Layout,
  NewsletterSignupForm,
  RichText,
  Seo,
  Typography,
} from "../../components";

export function Head({ data }: HeadProps<Queries.PostQuery>) {
  const { title, metaTitle, metaDescription } = data.post!;
  return (
    <Seo
      title={metaTitle ?? title!}
      description={metaDescription?.metaDescription ?? ""}
    />
  );
}

export default function Post({ data }: PageProps<Queries.PostQuery>) {
  const { title, feature, body } = data.post!;

  return (
    <Layout>
      <Section>
        <Container>
          <Columns multiline={true}>
            <Columns.Column size="half">
              <h1 className="tw-font-playfair tw-text-6xl">{title}</h1>
            </Columns.Column>
            <Columns.Column size={12}>
              <Columns>
                <Columns.Column size="half" className="tw-space-y-6">
                  <GatsbyImage
                    image={getImage(feature!)!}
                    alt="Post feature"
                    className="tw-rounded-lg"
                  />
                  <RichText src={body} />
                </Columns.Column>
                <Columns.Column size="one-quarter">
                  <NewsletterSignupForm />
                </Columns.Column>
              </Columns>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query Post($id: String) {
    post: contentfulPost(id: { eq: $id }) {
      title
      metaTitle
      feature {
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
      metaDescription {
        metaDescription
      }
      body {
        raw
      }
    }
  }
`;
