import { Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo, JobApplicationForm } from "./components";
import { ContentfulClient } from "./data";

interface CareersProps {
    title: string;
    description: string;
}

export async function query(): Promise<CareersProps> {
    const pageId = "6774JZOzZTyrxoleyGqJqK";
    const client = new ContentfulClient();
    const page = await client.getPage(pageId);
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
    };
}

export function Head(props: CareersProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Careers(_: CareersProps) {
    return (
        <Layout>
            <Section>
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            <h1 className="tw-font-serif tw-text-6xl tw-mb-6">Careers</h1>
                            <p className="tw-font-sans tw-mb-4">
                                Want to join a team that is passionate about patient care? FPCW is
                                expanding, and we are looking to meet great providers with various
                                types of qualifications.
                            </p>
                            <p className="tw-font-sans tw-mb-4">
                                We offer competitive compensation, a fun work environment, and
                                unparalleled work-life balance.
                            </p>
                            <p className="tw-font-sans tw-mb-4">
                                Interested in joining our team? Submit an application today!
                            </p>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <img
                                alt="Woman speaking with therapist"
                                src="https://www.helpguide.org/wp-content/uploads/woman-on-couch-speaking-with-therapist.jpg"
                                className="tw-rounded-lg"
                            />
                        </Columns.Column>
                        <Columns.Column size={3}>
                            <JobApplicationForm />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
