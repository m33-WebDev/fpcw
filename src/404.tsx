import { Content, Section } from "react-bulma-components";
import { Layout, Seo, Typography } from "./components";

export function Head() {
    return <Seo title="Page Not Found" description="This resource was not found." noIndex />;
}

export default function Page404() {
    return (
        <Layout>
            <Section>
                <Content textAlign="center">
                    <Typography>
                        It looks like this page no longer exists.
                        <br />
                        Return to <a href="/">Home</a>.
                    </Typography>
                </Content>
            </Section>
        </Layout>
    );
}
