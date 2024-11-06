import { Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo } from "./components";
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
                    <h1 className="tw-font-serif tw-text-6xl tw-mb-8">
                        Mental health services provided
                    </h1>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={6}>
                        <Columns.Column size={4}>
                            <h2 className="tw-font-sans tw-text-3xl tw-mb-6 tw-underline tw-decoration-2 tw-underline-offset-8 tw-decoration-[#48C744]">
                                Conditions treated
                            </h2>
                            <p className="tw-font-sans mb-4">
                                We offer expert diagnosis and treatment of most psychiatric
                                conditions, including:
                            </p>
                            <ul className="tw-pl-6">
                                {conditions.map((service) => (
                                    <Service key={service.name} service={service} />
                                ))}
                            </ul>
                        </Columns.Column>
                        <Columns.Column size={4}>
                            <h2 className="tw-font-sans tw-text-3xl tw-mb-6 tw-underline tw-decoration-2 tw-underline-offset-8 tw-decoration-[#48C744]">
                                Services offered
                            </h2>
                            <p className="tw-font-sans mb-4">
                                We offer counseling and treatment for a full range of mental health
                                conditions including:
                            </p>
                            <ul className="tw-pl-6">
                                {psychTreatments.map((service) => (
                                    <Service key={service.name} service={service} />
                                ))}
                            </ul>
                        </Columns.Column>
                        <Columns.Column size={4}>
                            <h2 className="tw-font-sans tw-text-3xl tw-mb-6 tw-underline tw-decoration-2 tw-underline-offset-8 tw-decoration-[#48C744]">
                                Wellness and prevention
                            </h2>
                            <p className="tw-font-sans mb-4">
                                We provide holistic therapies to promote emotional wellbeing:
                            </p>
                            <ul className="tw-pl-6">
                                {altTreatments.map((service) => (
                                    <Service key={service.name} service={service} />
                                ))}
                            </ul>
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
        <li className="tw-font-sans tw-list-disc tw-mb-2" key={service.name}>
            {service.article ? (
                <a href={`/library/${service.article}`}>{service.name}</a>
            ) : (
                service.name
            )}
        </li>
    );
}
