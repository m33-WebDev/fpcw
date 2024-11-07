import { Columns, Container, Section } from "react-bulma-components";
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
            <div className="tw-min-h-[calc(100vh-3.25rem)]">
                <Section className="tw-px-0 lg:tw-px-[1.5rem]">
                    <Container>
                        <Columns vCentered={true} className="tw-max-w-full">
                            <Columns.Column size={4}>
                                <AppointmentForm />
                            </Columns.Column>
                            <Columns.Column size={8}>
                                <h2 className="tw-font-sans">
                                    {/* See what we can do for you. Schedule an appointment today. */}
                                </h2>
                                <img
                                    className="tw-w-full tw-rounded-lg tw-hidden lg:tw-block"
                                    src="https://plus.unsplash.com/premium_photo-1669137759430-3a04cd1a7cd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </div>
        </Layout>
    );
}
