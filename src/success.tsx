import { Container, Section } from "react-bulma-components";
import { Layout, Seo } from "./components";

export function Head() {
    return (
        <Seo
            title="Success"
            description="Form submission successful. Please return to the main page."
            noIndex
        />
    );
}

export default function Success() {
    return (
        <Layout>
            <Section>
                <Container>
                    <div className="tw-text-center">
                        <p className="tw-font-sans">
                            Thanks for your submission!
                            <br />
                            We'll be in touch.
                            <br />
                            Return to <a href="/">Home</a>.
                        </p>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}
