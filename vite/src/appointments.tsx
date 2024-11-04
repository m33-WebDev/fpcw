import { styled } from "styled-components";
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
                    <Disclaimer>
                        <Typography>{disclaimer1}</Typography>
                        <br />
                        <Typography>{disclaimer2}</Typography>
                    </Disclaimer>
                </Container>
            </Section>
        </Layout>
    );
}

const Disclaimer = styled.div`
    margin-top: 2vmin;
    position: relative;
    border: 4px solid #48c774;
    padding: 2em;
    ::before {
        content: "note";
        padding: 2px 18px;
        margin-top: -4px;
        text-transform: uppercase;
        font-weight: lighter;
        position: absolute;
        top: 0;
        color: #48c774;
        background-color: #494949;
    }
`;
