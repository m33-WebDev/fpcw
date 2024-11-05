import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, Typography } from "./components";
import services from "./content/services.json";
import { ContentfulClient } from "./data";

interface ServicesProps {
    title: string;
    description: string;
}

export async function query(): Promise<ServicesProps> {
    const pageId = "1L4L2uLwrkpBBhxA2AORq7";
    const client = new ContentfulClient();
    const page = await client.getPage(pageId);
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
    };
}

export function Head(props: ServicesProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Services(_: ServicesProps) {
    const { conditions, psychTreatments, altTreatments } = services;

    return (
        <Layout>
            <Section>
                <Container>
                    <Block>
                        <Typography as="h1" $family="secondary" $size="xxl">
                            Mental Health Services Provided at FPCW
                        </Typography>
                    </Block>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={6}>
                        <Columns.Column size={4}>
                            <Content>
                                <Typography as="h2" $size="xl">
                                    Conditions Treated
                                </Typography>
                                <Typography>
                                    We offer expert diagnosis and treatment of most psychiatric
                                    conditions, including:
                                </Typography>
                                <ul>
                                    {conditions.map((service) => (
                                        <Service key={service.name} service={service} />
                                    ))}
                                </ul>
                            </Content>
                        </Columns.Column>
                        <Columns.Column size={4}>
                            <Content>
                                <Typography as="h2" $size="xl">
                                    Services Offered
                                </Typography>
                                <Typography>
                                    We offer counseling and treatment for a full range of mental
                                    health conditions including:
                                </Typography>
                                <ul>
                                    {psychTreatments.map((service) => (
                                        <Service key={service.name} service={service} />
                                    ))}
                                </ul>
                            </Content>
                        </Columns.Column>
                        <Columns.Column size={4}>
                            <Content>
                                <Typography as="h2" $size="xl">
                                    Wellness and Prevention
                                </Typography>
                                <Typography>
                                    We provide holistic therapies to promote emotional wellbeing:
                                </Typography>
                                <ul>
                                    {altTreatments.map((service) => (
                                        <Service key={service.name} service={service} />
                                    ))}
                                </ul>
                            </Content>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

interface ServiceInfo {
    name: string;
    article?: string;
}

function Service(props: { service: ServiceInfo }) {
    const { service } = props;
    return (
        <Typography as="li" key={service.name}>
            {service.article ? (
                <a href={`/library/${service.article}`}>{service.name}</a>
            ) : (
                service.name
            )}
        </Typography>
    );
}
