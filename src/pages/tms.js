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
import styled from "styled-components";

const imageSmilingMan =
  "https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80";
const imageShakingHands =
  "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
const imageVeryHappy =
  "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export default function Tms() {
  const navbar = true;

  return (
    <Layout>
      <Seo title="Transcranial Magnetic Stimulation (TMS)" />

      {/* Splash / intro */}
      <Hero
        size="fullheight"
        color="success"
        hasNavbar={navbar}
        style={{ position: "relative" }}
      >
        <Hero.Body>
          <Container style={{ position: "relative" }}>
            <Content>
              <Heading size={1}>Transcranial Magnetic Stimulation</Heading>
              <Heading subtitle={true} size={3} renderAs="h2">
                at Family Psychiatry
              </Heading>
            </Content>
            {/* <img
              src="http://getdrawings.com/img/flower-silhouette-clip-art-12.png"
              alt="heh"
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                color: "white",
              }}
              width="512px"
            /> */}
          </Container>
        </Hero.Body>
      </Hero>

      {/* What it does */}
      <Hero size="fullheight" hasNavbar={navbar}>
        <Hero.Body>
          <Container>
            <Columns vCentered={true}>
              <Columns.Column textAlign="center">
                <FancyImage
                  src={imageSmilingMan}
                  width="512px"
                  height="512px"
                  radius="30% 70% 70% 30% / 30% 30% 70% 70%"
                  color="success"
                />
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
                <FancyImage
                  src={imageShakingHands}
                  width="512px"
                  height="512px"
                  radius="30% 70% 20% 80% / 70% 30% 70% 30%"
                />
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
                <FancyImage
                  src={imageVeryHappy}
                  width="512px"
                  height="512px"
                  radius="16% 84% 24% 76% / 70% 15% 85% 30%"
                  color="success"
                />
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
            <a href="https://neurostar.com/" target="_blank" rel="noreferrer">
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

const FancyImage = styled.img`
  padding: 5px;
  border: dotted 5px;
  border-radius: ${(props) => props.radius};
  border-color: ${(props) =>
    props.color === "success" ? "#48C774" : "#F5F5F5"};
`;
