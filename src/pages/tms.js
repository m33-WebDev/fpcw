import React from "react";
import {
  Heading,
  Hero,
  Content,
  Container,
  Columns,
} from "react-bulma-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Tms(props) {
  const navbar = true;

  return (
    <Layout>
      <Seo title="Transcranial Magnetic Stimulation (TMS)" />

      {/* Splash / intro */}
      <Hero size="fullheight" color="success" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Content>
              <Heading size={1}>Transcranial Magnetic Stimulation</Heading>
              <Heading subtitle={true} size={3}>
                at Family Psychiatry
              </Heading>
            </Content>
          </Container>
        </Hero.Body>
      </Hero>

      {/* Brief description */}
      <Hero size="fullheight" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Columns>
              <Content>
                Our passion here at Collaborative Solutions in Psychiatry is to
                provide individualized care. Dr. Kirmani-Moe is always looking
                for treatments for mental health that go beyond prescription
                medications. With that goal in mind, her practice chose to work
                with Neurostar to bring Transcranial Magnetic Stimulation (TMS)
                to its patients. TMS offers not only improvement, but actual
                remission of even the most severe cases of depression.
              </Content>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>

      {/* How it works */}
      <Hero size="fullheight" color="success" hasNavbar={navbar}>
        <Hero.Body>Section 3</Hero.Body>
      </Hero>

      {/* Sign up */}
      <Hero size="fullheight" hasNavbar={navbar}>
        <Hero.Body>Section 4</Hero.Body>
      </Hero>
    </Layout>
  );
}
