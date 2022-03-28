import React from "react";
import { Columns, Container, Heading, Section } from "react-bulma-components";
import { Layout, Seo, FormBrainTesting } from "../components";

export default function BrainTesting() {
    return (
        <>
            <Seo title="Schedule a brain testing appointment" />
            <Layout>
                <Section>
                    <Container>
                        <Columns>
                            <Columns.Column size={6}>
                                <Heading size={1}>Schedule a Brain Testing Appointment Today!</Heading>
                                <FormBrainTesting />
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </Layout>
        </>
    );
}
