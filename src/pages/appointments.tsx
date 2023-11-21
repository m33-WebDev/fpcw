import { graphql } from "gatsby";
import React from "react";
import { Container, Section } from "react-bulma-components";
import { AppointmentForm, Layout, Seo } from "../components";

export function Head({ data }) {
  const title = data.contentfulPage.metaTitle;
  const description = data.contentfulPage.metaDescription.metaDescription;
  return <Seo title={title} description={description} />;
}

export default function Appointments() {
  return (
    <Layout>
      <div className="tw-h-[calc(100vh-52px)] tw-flex tw-align-center tw-items-center tw-bg-gradient-to-r tw-from-[#48C744] tw-to-emerald-500">
        <Container>
          <AppointmentForm />
        </Container>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulPage(title: { eq: "Appointments" }) {
      metaTitle
      metaDescription {
        metaDescription
      }
    }
  }
`;
