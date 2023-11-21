import { Link } from "gatsby";
import React from "react";
import { Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, Typography } from "../components";

export function Head() {
  return (
    <Seo
      title="FPCW - Success"
      description="Form submission successful. Please return to the main page."
      noIndex
    />
  );
}

export default function FormSuccess() {
  return (
    <Layout>
      <Section>
        <Container>
          <Content textAlign="center">
            <Typography family="secondary">
              Thanks for your submission!
              <br />
              We'll be in touch.
              <br />
              Return to <Link to="/">Home</Link>.
            </Typography>
          </Content>
        </Container>
      </Section>
    </Layout>
  );
}
