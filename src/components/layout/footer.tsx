import { Columns, Container, Footer as BulmaFooter, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const contactDetails: [string, IconDefinition | null, string][] = [
    ["phone", faPhone, "(805) 341-3416"],
    ["email", faEnvelope, "fpcw@familypsychiatry101.com"],
    ["mon_thu", faCalendar, "Monday - Thursday - 9:00am - 5:00pm"],
    ["fri", faCalendar, "Friday - 8:00am - 3:00pm"],
];

export function Footer() {
    return (
        <BulmaFooter backgroundColor="white">
            <Container>
                <Columns>
                    <Columns.Column size={3}>
                        {contactDetails.map(([key, icon, text]) => (
                            <Icon.Text key={key} mb={2}>
                                {icon && (
                                    <Icon>
                                        <FontAwesomeIcon icon={icon} />
                                    </Icon>
                                )}
                                <p className="tw-font-sans">{text}</p>
                            </Icon.Text>
                        ))}
                        <p className="tw-mt-2 tw-font-sans">
                            Same day appointments available. We are closed on weekends and holidays.
                        </p>
                    </Columns.Column>
                    <Divider />
                    <Columns.Column size={2}>
                        <p className="tw-font-sans">
                            31194 La Baya Drive
                            <br />
                            Suite 202
                            <br />
                            Westlake Village, CA 91362
                        </p>
                    </Columns.Column>
                    <Divider />
                    <Columns.Column size={3}>
                        <p className="tw-font-sans">
                            © 2024 Family Psychiatry Counseling and Wellness.
                        </p>
                    </Columns.Column>
                </Columns>
            </Container>
        </BulmaFooter>
    );
}

function Divider() {
    return (
        <Columns.Column size={1} textAlign="center" mobile={{ display: "hidden" }}></Columns.Column>
    );
}
