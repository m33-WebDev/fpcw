import { Container, Section } from "react-bulma-components";
import { AppointmentForm, Layout, Seo } from "./components";
import { ContentfulClient } from "./data";

interface AppointmentProps {
    title: string;
    description: string;
}

export async function query(): Promise<AppointmentProps> {
    const pageId = "2uRgogyXcVEACwLi4REmEP";
    const client = new ContentfulClient();
    const page = await client.getPage(pageId);
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
    };
}

export function Head(props: AppointmentProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Appointments(_: AppointmentProps) {
    return (
        <Layout>
            <div className="tw-min-h-[calc(100vh-3.25rem)] lg:tw-bg-gradient-to-r tw-from-[#48C744] tw-to-emerald-500">
                <Section className="tw-px-0 lg:tw-px-[1.5rem]">
                    <Container>
                        <AppointmentForm />
                    </Container>
                </Section>
            </div>
        </Layout>
    );
}
