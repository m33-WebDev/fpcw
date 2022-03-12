import React from "react";
import Layout from "../components/layout";
import { Hero } from "react-bulma-components";

export default function Tms(props) {
  return (
    <Layout>
      <Hero size="fullheight">
        <Hero.Body>Section 1</Hero.Body>
      </Hero>

      <Hero size="fullheight">
        <Hero.Body>Section 2</Hero.Body>
      </Hero>

      <Hero size="fullheight">
        <Hero.Body>Section 3</Hero.Body>
      </Hero>

      <Hero size="fullheight">
        <Hero.Body>Section 4</Hero.Body>
      </Hero>
    </Layout>
  );
}
