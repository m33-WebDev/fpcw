import { Section } from "react-bulma-components";
import { Layout, Seo } from "./components";

export function Head() {
    return <Seo title="Page Not Found" description="This resource was not found." noIndex />;
}

export default function Page404() {
    return (
        <Layout>
            <Section>
                <div className="tw-text-center">
                    <p className="tw-font-sans">
                        It looks like this page no longer exists.
                        <br />
                        Return to <a href="/">Home</a>.
                    </p>
                </div>
            </Section>
        </Layout>
    );
}
