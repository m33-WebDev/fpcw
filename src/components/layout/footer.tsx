import React from "react";
import { Columns, Container, Content, Footer as BulmaFooter, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "../style";

const contactDetails: [IconDefinition, string][] = [
    [faPhone, "(805) 341-3416"],
    [faEnvelope, "fpcw@familypsychiatry101.com"],
    [faCalendar, "Monday - Thursday - 9:00am - 5:00pm"],
    [faCalendar, "Friday - 8:00am - 3:00pm"],
    [ , "Same day appointments available . We are closed on Weekends and Holidays. "]

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
                                <Typography>{text}</Typography>
                            </Icon.Text>
                        ))}
                    </Columns.Column>
                    <Divider />
                    <Columns.Column size={2}>
                        <Content>
                            
                            <Typography>
                                31194 La Baya Drive
                                <br />
                                Suite 202
                                <br />
                                Westlake Village, CA 91362
                            </Typography>
                        </Content>
                    </Columns.Column>
                    <Divider />
                    <Columns.Column size={3}>
                        <Content>
                            <Typography>© 2021 Family Psychiatry Counseling and Wellness.</Typography>
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
