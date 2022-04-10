import React from "react";
import { Link } from "gatsby";
import { Content, Section } from "react-bulma-components";
import { Layout, Seo, Typography } from "../components";

export default function Page404() {
    return (
        <>
            <Seo title="Page Not Found" description="This resource was not found." noIndex />
            <Layout>
                <Section>
                    <Content textAlign="center">
                        <Typography>
                            It looks like this page no longer exists.
                            <br />
                            Return to <Link to="/">Home</Link>.
                        </Typography>
                    </Content>
                </Section>
            </Layout>
        </>
    );
}
