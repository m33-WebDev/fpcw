import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, FormJobApplication, Typography } from "./components";
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
                            <Block>
                                <Typography as="h1" $family="secondary" $size="xxl">
                                    Careers
                                </Typography>
                            </Block>
                            <Content>
                                <Typography>
                                    Want to join a team that is passionate about patient care? FPCW
                                    is expanding, and we are looking to meet great providers with
                                    various types of qualifications.
                                </Typography>
                                <br />
                                <Typography>
                                    We offer competitive compensation, a fun work environment, and
                                    unparalleled work-life balance.
                                </Typography>
                                <br />
                                <Typography>
                                    Interested in joining our team? Submit an application today!
                                </Typography>
                            </Content>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <img
                                alt="Woman speaking with therapist"
                                src="https://www.helpguide.org/wp-content/uploads/woman-on-couch-speaking-with-therapist.jpg"
                            />
                        </Columns.Column>
                        <Columns.Column size={3}>
                            <FormJobApplication />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
