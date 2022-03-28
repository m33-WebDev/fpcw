import React from "react";
import { Link } from "gatsby";
import { Content, Section } from "react-bulma-components";
import { Layout, Seo } from "../components";

export default function Page404() {
    return (
        <>
            <Seo title="Page Not Found" noIndex />
            <Layout>
                <Section>
                    <Content textAlign="center">
                        <p>
                            It looks like this page no longer exists.
                            <br />
                            Return to <Link to="/">Home</Link>.
                        </p>
                    </Content>
                </Section>
            </Layout>
        </>
    );
}
