import React from "react";
import { Columns, Container, Content, Footer as BulmaFooter, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar } from "@fortawesome/free-solid-svg-icons";

const contactDetails = [
    [faPhone, "(805) 341-3416"],
    [faEnvelope, "fpcw@familypsychiatry101.com"],
    [faCalendar, "Monday - Friday, 9:00am - 6:00pm"]
];

export function Footer() {
    return (
        <BulmaFooter backgroundColor="success">
            <Container>
                <Columns vCentered={true}>
                    <Columns.Column size={3}>
                        {contactDetails.map(([icon, text]) => (
                            <Icon.Text mb={2}>
                                <Icon>
                                    <FontAwesomeIcon icon={icon} />
                                </Icon>
                                <span>{text}</span>
                            </Icon.Text>
                        ))}
                    </Columns.Column>
                    <Divider />
                    <Columns.Column size={2}>
                        <Content>
                            <p>
                                31194 La Baya Drive
                                <br />
                                Suite 202
                                <br />
                                Westlake Village, CA 91362
                            </p>
                        </Content>
                    </Columns.Column>
                    <Divider />
                    <Columns.Column size={3}>
                        <Content>
                            <p>© 2021 Family Psychiatry Counseling and Wellness.</p>
                        </Content>
                    </Columns.Column>
                </Columns>
            </Container>
        </BulmaFooter>
    );
}

function Divider() {
    return (
        <Columns.Column size={1} textAlign="center" mobile={{ display: "hidden" }}>
            ·
        </Columns.Column>
    );
}
