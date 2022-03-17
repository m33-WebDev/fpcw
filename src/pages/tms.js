import React, { useState } from "react";
import {
  Heading,
  Content,
  Container,
  Columns,
  Form,
  Button,
  Level,
  Section,
} from "react-bulma-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import neurostar from "../images/neurostar-logo.webp";
import styled from "styled-components";
import FormAppointment from "../components/formappointment";

import tmsSmilingMan from "../images/tms/HatDude-extended-top-background.jpg";
import tmsLateralHead from "../images/tms/HP-LateralHead_coil_2021.jpg";
import tmsMalePatient from "../images/tms/MalePatientDr-closeup.jpg";

export default function Tms() {
  return (
    <Layout>
      <Seo
        title="Transcranial Magnetic Stimulation (TMS)"
        description="A non-medication and non-invasive option for treatment of depression, powered by NeuroStar technology."
      />

      {/* Introduction */}
      <Section size="halfheight">
        <Container>
          <Columns vCentered={true}>
            <Columns.Column textAlign="center">
              <FancyImage
                src={tmsSmilingMan}
                width="512px"
                height="512px"
                radius="30% 70% 70% 30% / 30% 30% 70% 70%"
                color="success"
              />
            </Columns.Column>
            <Columns.Column>
              <Content size="medium">
                <Heading size={1} textColor="success">
                  Transcranial Magnetic Stimulation
                </Heading>
                <Heading subtitle={true} textColor="grey-light" renderAs="h2">
                  Tap into a new possibility for depression
                </Heading>
                <p>
                  Transcranial magnetic stimulation, or TMS for short, is a
                  safe, effective, non-invasive, non-drug treatment for
                  depression without the side effects of medications. The
                  treatment requires no sedation or anesthesia. It also has no
                  recovery time, meaning patients can resume normal activity -
                  including driving - immediately after sessions. Covered by
                  most insurance providers.
                </p>
              </Content>
              <Level>
                <Level.Side align="left" />
                <Level.Side align="right">
                  <strong>Powered by</strong>{" "}
                  <a
                    href="https://neurostar.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={neurostar} alt="Neurostar Logo" width="100px" />
                  </a>
                </Level.Side>
              </Level>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* How TMS works */}
      <Section>
        <Container>
          <Columns vCentered={true}>
            <Columns.Column>
              <Content size="medium">
                <Heading renderAs="h2" textColor="success">
                  How TMS Works
                </Heading>
                <Heading subtitle={true} renderAs="h3" textColor="grey-light">
                  Stimulating the brain with magnetic pulses
                </Heading>
                <p>
                  TMS uses focused magnetic pulses, similar to an MRI, to
                  stimulate underactive areas of the brain which results in
                  improvement of depression. It is <strong>not</strong> a drug,
                  shock therapy, or surgery.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column textAlign="center">
              <FancyImage
                src={tmsLateralHead}
                width="512px"
                height="512px"
                radius="30% 70% 20% 80% / 70% 30% 70% 30%"
                color="success"
              />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* Lasting relief */}
      <Section>
        <Container>
          <Columns vCentered={true}>
            <Columns.Column textAlign="center">
              <FancyImage
                src={tmsMalePatient}
                width="512px"
                height="512px"
                radius="16% 84% 24% 76% / 70% 15% 85% 30%"
                color="success"
              />
            </Columns.Column>
            <Columns.Column>
              <Content size="medium">
                <Heading textColor="success" renderAs="h2">
                  Lasting Relief from Depression
                </Heading>
                <Heading subtitle={true} renderAs="h3" textColor="grey-light">
                  The #1 physician-recommended treatment for non-responsive
                  depression
                </Heading>
                <p>
                  Over 80% of patients who completed TMS treatments experienced
                  significant relief, and out of those, 62% saw full remission
                  of their depression symptoms.
                </p>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* Quiz */}
      <Section>
        <Container>
          <Columns vCentered={true} gap={8}>
            <Columns.Column>
              <Content size="medium">
                <Heading textColor="success" renderAs="h2">
                  Find Out If TMS Is Right for You
                </Heading>
                <Heading subtitle={true} textColor="grey-light" renderAs="h3">
                  Take the quiz and set up a free consultation
                </Heading>
                <p>
                  TMS is FDA-approved for the treatment of moderate to severe
                  depression in patients who have partially responded or not
                  responded to medications and talk therapy. If you fit these
                  criteria, adding TMS therapy to your existing treatment plan
                  may help you achieve full remission.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column>
              <Quizlet />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
}

const assertions = [
  { id: 0, val: "I have been diagnosed with depression" },
  { id: 1, val: "I have tried or am currently on antidepressant medications" },
  {
    id: 2,
    val:
      "I have tried, or am currently on, 3 or more antidepressant medications",
  },
  { id: 3, val: "I have tried talk therapy" },
  { id: 4, val: "My doctor or therapist suggested I try TMS therapy" },
  {
    id: 5,
    val:
      "I am currently experiencing symptoms of depression (sadness, low energy, poor concentration, appetite changes, irritability)",
  },
];

function Quizlet() {
  const [phase, setPhase] = useState("quiz");
  const [selections, setSelections] = useState({});

  const answerAssertion = (assertion, answer) => {
    setSelections((prev) => ({ ...prev, [assertion.id]: answer }));
  };

  const moveToSignup = () => {
    if (
      assertions.every((assertion) => selections[assertion.id] !== undefined)
    ) {
      setPhase("signup");
    }
  };

  if (phase === "quiz") {
    return (
      <>
        <Columns multiline={true}>
          {assertions.map((assertion) => (
            <Columns.Column size={6}>
              <Form.Field kind="group">
                <Form.Label>{assertion.val}</Form.Label>
                <Form.Control>
                  <Button
                    color={
                      selections[assertion.id] === true ? "success" : "white"
                    }
                    rounded={true}
                    onClick={() => answerAssertion(assertion, true)}
                  >
                    Yes
                  </Button>
                </Form.Control>
                <Form.Control>
                  <Button
                    color={
                      selections[assertion.id] === false ? "success" : "white"
                    }
                    rounded={true}
                    onClick={() => answerAssertion(assertion, false)}
                  >
                    No
                  </Button>
                </Form.Control>
              </Form.Field>
            </Columns.Column>
          ))}
        </Columns>
        <Button
          onClick={moveToSignup}
          fullwidth={true}
          rounded={true}
          color="success"
        >
          Next
        </Button>
      </>
    );
  } else if (phase === "signup") {
    return (
      <div>
        <Content>
          <strong>
            Based on your answers, this treatment may be right for you.
          </strong>
        </Content>
        <FormAppointment />
      </div>
    );
  }
}

const FancyImage = styled.img`
  padding: 5px;
  border: dotted 5px;
  /* border-radius: ${(props) =>
    props.radius}; @disabled: Doesn't look great with non-square photos. */
  border-color: ${(props) =>
    props.color === "success" ? "#48C774" : "#F5F5F5"};
`;
