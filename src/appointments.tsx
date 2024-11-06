import { Block, Container, Section } from "react-bulma-components";
import { Layout, Seo, FormAppointment, Typography } from "./components";
import { ContentfulClient } from "./data";

const disclaimer1 = `
This appointment request form requires you to provide personal information
for the purposes of scheduling your appointment. By completing and transmitting
this form, you consent to disclose such information to a Family Psychiatry Counseling
and Wellness affiliated representative. Also, general data (excluding patient
identifiable information) may be used for internal analysis purposes.
`;

const disclaimer2 = `
If you prefer to request an appointment by telephone, please contact our office
directly at (805) 341-3416 during normal business hours.
`;

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
            <Section>
                <Container>
                    <Block>
                        <Typography as="h1" $family="secondary" $size="xxl">
                            Request an Appointment
                        </Typography>
                    </Block>
                    <FormAppointment />
                    <div
                        id="disclaimer"
                        className="mt-2 relative border-4 border-solid border-[#48c774] px-4 pt-8 pb-4 before:absolute before:top-0 before:content-['NOTE'] before:px-6 before:py-1 before:mt-[-4px] before:text-[#48c774] before:bg-[#494949]"
                    >
                        <Typography>{disclaimer1}</Typography>
                        <br />
                        <Typography>{disclaimer2}</Typography>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}
