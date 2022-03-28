import React from "react";
import { Link } from "gatsby";
import { Container, Content, Section } from "react-bulma-components";
import { Layout, Seo } from "../components";

export default function FormSuccess() {
    return (
        <>
            <Seo title="FPCW - Success" noIndex />
            <Layout>
                <Section>
                    <Container>
                        <Content textAlign="center">
                            <p>
                                Thanks for your submission!
                                <br />
                                We'll be in touch.
                                <br />
                                Return to <Link to="/">Home</Link>.
                            </p>
                        </Content>
                    </Container>
                </Section>
            </Layout>
        </>
    );
}
