import { Container } from "react-bulma-components";
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
            <div className="tw-h-[calc(100vh-52px)] tw-flex tw-align-center tw-items-center tw-bg-gradient-to-r tw-from-[#48C744] tw-to-emerald-500">
                <Container>
                    <AppointmentForm />
                </Container>
            </div>
        </Layout>
    );
}
