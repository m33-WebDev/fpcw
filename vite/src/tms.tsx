import { useState } from "react";
import {
    Content,
    Container,
    Columns,
    Form,
    Button,
    Level,
    Section,
    Block,
} from "react-bulma-components";
import { styled } from "styled-components";
import { Layout, Seo, FormAppointment, Typography } from "./components";

export function Head() {
    return (
        <Seo
            title="Transcranial Magnetic Stimulation (TMS)"
            description="A non-medication and non-invasive option for treatment of depression, powered by NeuroStar technology."
        />
    );
}

export default function Tms() {
    return (
        <Layout>
            {/* Introduction */}
            <Section size="halfheight">
                <Container>
                    <Columns vCentered={true}>
                        <Columns.Column textAlign="center">
                            <FancyImage
                                src="./images/tms/HatDude-extended-top-background.jpg"
                                width="512px"
                                height="512px"
                                color="success"
                            />
                        </Columns.Column>
                        <Columns.Column>
                            <Block>
                                <Typography as="h1" $family="secondary" $size="xxl">
                                    Transcranial Magnetic Stimulation
                                </Typography>
                            </Block>
                            <Block>
                                <Typography $size="l" $color="secondary">
                                    Tap into a new possibility for depression
                                </Typography>
                            </Block>
                            <Typography>
                                Transcranial magnetic stimulation, or TMS for short, is a safe,
                                effective, non-invasive, non-drug treatment for depression without
                                the side effects of medications. The treatment requires no sedation
                                or anesthesia. It also has no recovery time, meaning patients can
                                resume normal activity - including driving - immediately after
                                sessions. Covered by most insurance providers.
                            </Typography>
                            <Level>
                                <Level.Side align="left" />
                                <Level.Side align="right">
                                    <Typography>
                                        <strong>Powered by</strong>{" "}
                                    </Typography>
                                    <a
                                        href="https://neurostar.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="./images/neurostar-logo.webp"
                                            alt="Neurostar Logo"
                                            width="100px"
                                        />
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
                            <Block>
                                <Typography as="h2" $family="secondary" $size="xl">
                                    How TMS Works
                                </Typography>
                            </Block>
                            <Block>
                                <Typography $size="m" $color="secondary">
                                    Stimulating the brain with magnetic pulses
                                </Typography>
                            </Block>
                            <Typography>
                                TMS uses focused magnetic pulses, similar to an MRI, to stimulate
                                underactive areas of the brain which results in improvement of
                                depression. It is <strong>not</strong> a drug, shock therapy, or
                                surgery.
                            </Typography>
                        </Columns.Column>
                        <Columns.Column textAlign="center">
                            <FancyImage
                                src="./images/tms/HP-LateralHead_coil_2021.jpg"
                                width="512px"
                                height="512px"
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
                                src="./images/tms/MalePatientDr-closeup.jpg"
                                width="512px"
                                height="512px"
                                color="success"
                            />
                        </Columns.Column>
                        <Columns.Column>
                            <Block>
                                <Typography as="h2" $family="secondary" $size="xl">
                                    Lasting Relief from Depression
                                </Typography>
                            </Block>
                            <Block>
                                <Typography $size="m" $color="secondary">
                                    The #1 physician-recommended treatment for non-responsive
                                    depression
                                </Typography>
                            </Block>
                            <Typography>
                                Over 80% of patients who completed TMS treatments experienced
                                significant relief, and out of those, 62% saw full remission of
                                their depression symptoms.
                            </Typography>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>

            {/* Quiz */}
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns vCentered={true} gap={8}>
                        <Columns.Column>
                            <Block>
                                <Typography as="h2" $family="secondary" $size="xl">
                                    Find Out If TMS Is Right for You
                                </Typography>
                            </Block>
                            <Block>
                                <Typography $size="m" $color="secondary">
                                    Take the quiz and set up a free consultation
                                </Typography>
                            </Block>
                            <Typography>
                                TMS is FDA-approved for the treatment of moderate to severe
                                depression in patients who have partially responded or not responded
                                to medications and talk therapy. If you fit these criteria, adding
                                TMS therapy to your existing treatment plan may help you achieve
                                full remission.
                            </Typography>
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
        val: "I have tried, or am currently on, 3 or more antidepressant medications",
    },
    { id: 3, val: "I have tried talk therapy" },
    { id: 4, val: "My doctor or therapist suggested I try TMS therapy" },
    {
        id: 5,
        val: "I am currently experiencing symptoms of depression (sadness, low energy, poor concentration, appetite changes, irritability)",
    },
];

function Quizlet() {
    const [phase, setPhase] = useState("quiz");
    const [selections, setSelections] = useState({});

    // @ts-ignore
    const answerAssertion = (assertion, answer) => {
        setSelections((prev) => ({ ...prev, [assertion.id]: answer }));
    };

    const moveToSignup = () => {
        // @ts-ignore
        if (assertions.every((assertion) => selections[assertion.id] !== undefined)) {
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
                                            // @ts-ignore
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
                                            // @ts-ignore
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
                <Button onClick={moveToSignup} fullwidth={true} rounded={true} color="success">
                    Next
                </Button>
            </>
        );
    } else if (phase === "signup") {
        return (
            <div>
                <Content>
                    <strong>Based on your answers, this treatment may be right for you.</strong>
                </Content>
                <FormAppointment />
            </div>
        );
    } else {
        return <></>;
    }
}

const FancyImage = styled.img`
    padding: 5px;
    border: dotted 5px;
    border-color: ${(props) => (props.color === "success" ? "#48C774" : "#F5F5F5")};
`;
