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
import FormAppointment from "../components/formappointment";
import neurostar from "../images/neurostar-logo.webp";

export default function Tms() {
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
              <Heading subtitle={true} size={3} renderAs="h2">
                at Family Psychiatry
              </Heading>
            </Content>
          </Container>
        </Hero.Body>
      </Hero>

      {/* What it does */}
      <Hero size="fullheight" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Columns vCentered={true}>
              <Columns.Column textAlign="center">
                <img src="https://via.placeholder.com/256" />
              </Columns.Column>
              <Columns.Column>
                <Content>
                  <Heading textColor="success" renderAs="h2">
                    Cutting-edge treatment for depression
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Content>
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>

      {/* How it works */}
      <Hero size="fullheight" color="success" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Columns vCentered={true}>
              <Columns.Column>
                <Content>
                  <Heading renderAs="h2">Non-invasive and effective</Heading>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Content>
              </Columns.Column>
              <Columns.Column textAlign="center">
                <img src="https://via.placeholder.com/256" />
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>

      {/* Our process */}
      <Hero size="fullheight" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Columns vCentered={true}>
              <Columns.Column textAlign="center">
                <img src="https://via.placeholder.com/256" />
              </Columns.Column>
              <Columns.Column>
                <Content>
                  <Heading textColor="success" renderAs="h2">
                    Our process
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Content>
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>

      {/* Our partners */}
      <Hero size="fullheight" color="success" hasNavbar={navbar}>
        <Hero.Body>
          <Container textAlign="center">
            <Heading renderAs="h2">Our partners</Heading>
            <a href="https://neurostar.com/" target="_blank">
              <img src={neurostar} alt="Neurostar Logo" />
            </a>
          </Container>
        </Hero.Body>
      </Hero>

      {/* Sign up */}
      <Hero size="fullheight" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Columns gap="8">
              <Columns.Column>
                <Content>
                  <Heading renderAs="h2" textColor="success">
                    Sign up for a free consultation
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Content>
              </Columns.Column>
              <Columns.Column>
                <FormAppointment />
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </Layout>
  );
}
