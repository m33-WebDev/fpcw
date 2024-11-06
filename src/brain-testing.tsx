import { Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo, BrainTestingForm } from "./components";

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
                            <h1 className="tw-font-serif tw-text-6xl tw-mb-6">
                                Schedule a Brain Testing Appointment Today!
                            </h1>
                            <BrainTestingForm />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
