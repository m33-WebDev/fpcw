import React from "react";
import { Block, Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo, FormBrainTesting, Typography } from "../components";

export function Head() {
    return (
        <Seo
            title="Schedule a brain testing appointment"
            description="Brain testing now available at Family Psychiatry."
        />
    );
}

export default function BrainTesting() {
    return (
        <Layout>
            <Section>
                <Container>
                    <Columns>
                        <Columns.Column size={6}>
                            <Block>
                                <Typography as="h1" family="secondary" size="xxl">
                                    Schedule a Brain Testing Appointment Today!
                                </Typography>
                            </Block>
                            <FormBrainTesting />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
