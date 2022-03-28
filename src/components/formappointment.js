import React, { useState } from "react";
import { Button, Columns, Form, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, faUserFriends, faUser } from "@fortawesome/free-solid-svg-icons";

const referralSources = [
    "Search Engine (Google, Yahoo, etc.)",
    "Social Media (Facebook, Instagram, etc.)",
    "Insurance Referral",
    "Word of Mouth",
    "Other"
];

const insuranceReferral = referralSources[2];
const wordOfMouthReferral = referralSources[3];
const otherReferral = referralSources[4];

export function FormAppointment() {
    const [referralSource, setReferralSource] = useState("");

    const handleChange = event => {
        setReferralSource(event.target.value);
    };

    return (
        <form name="appointmentrequest" method="POST" netlify="true" action="/formsuccess/">
            <input type="hidden" name="form-name" value="appointmentrequest" />
            <input type="hidden" name="referral-insurer" />
            <input type="hidden" name="referral-wordofmouth-name" />
            <input type="hidden" name="referral-wordofmouth-phone" />
            <input type="hidden" name="referral-other-details" />

            <Columns>
                <Columns.Column size={6}>
                    <Columns>
                        <Columns.Column>
                            <Form.Field>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control>
                                    <Form.Input placeholder="John" name="first-name" required></Form.Input>
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>
                        <Columns.Column>
                            <Form.Field>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control>
                                    <Form.Input placeholder="Smith" name="last-name" required></Form.Input>
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>
                    </Columns>
                    <Form.Field>
                        <Form.Label>Email</Form.Label>
                        <Form.Control>
                            <Form.Input placeholder="johnsmith@gmail.com" name="email" required />
                            <Icon align="left">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Icon>
                        </Form.Control>
                    </Form.Field>
                    <Form.Field>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control>
                            <Form.Input placeholder="(123) 456-7890" name="phone" required />
                            <Icon align="left">
                                <FontAwesomeIcon icon={faPhone} />
                            </Icon>
                        </Form.Control>
                    </Form.Field>
                    <Form.Field>
                        <Form.Label>Desired Appointment Date</Form.Label>
                        <Form.Control>
                            <input
                                className="input"
                                type="date"
                                placeholder="12/05/1993"
                                name="appt-requested-date"
                                required
                            />
                            <Icon align="left">
                                <FontAwesomeIcon icon={faCalendar} />
                            </Icon>
                        </Form.Control>
                    </Form.Field>
                </Columns.Column>
                <Columns.Column size={6}>
                    <Form.Field>
                        <Form.Label>How Did You Hear About Us?</Form.Label>
                        <Form.Control>
                            <Form.Select
                                color="success"
                                fullwidth={true}
                                name="referral-source"
                                value={referralSource}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            >
                                {referralSources.map(source => {
                                    return <option key={source}>{source}</option>;
                                })}
                            </Form.Select>
                            <Icon align="left">
                                <FontAwesomeIcon icon={faUserFriends} />
                            </Icon>
                        </Form.Control>
                    </Form.Field>
                    {referralSource === insuranceReferral && (
                        <Form.Field>
                            <Form.Label>Referring Insurer</Form.Label>
                            <Form.Control>
                                <Form.Input placeholder="Insurer" name="referral-insurer" />
                                <Icon align="left">
                                    <FontAwesomeIcon icon={faUser} />
                                </Icon>
                            </Form.Control>
                        </Form.Field>
                    )}
                    {referralSource === wordOfMouthReferral && (
                        <>
                            <Form.Field>
                                <Form.Label>Word of Mouth Referrer</Form.Label>
                                <Form.Control>
                                    <Form.Input placeholder="Name" name="referral-wordofmouth-name" />
                                    <Icon align="left">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Icon>
                                </Form.Control>
                            </Form.Field>
                            <Form.Field>
                                <Form.Control>
                                    <Form.Input placeholder="(123) 456-7890" name="referral-wordofmouth-phone" />
                                    <Icon align="left">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </Icon>
                                </Form.Control>
                            </Form.Field>
                        </>
                    )}
                    {referralSource === otherReferral && (
                        <Form.Field>
                            <Form.Label>Please Specify</Form.Label>
                            <Form.Control>
                                <Form.Input placeholder="..." name="referral-other-details" />
                                <Icon align="left">
                                    <FontAwesomeIcon icon={faUser} />
                                </Icon>
                            </Form.Control>
                        </Form.Field>
                    )}
                </Columns.Column>
            </Columns>
            <Form.Field>
                <Button color="success" outlined={true} fullwidth={true} type="submit">
                    Submit
                </Button>
            </Form.Field>
        </form>
    );
}
