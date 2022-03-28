import React from "react";
import { Button, Columns, Form, Icon } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export function FormBrainTesting() {
    return (
        <form name="braintestingappointment" method="POST" netlify="true" action="/formsuccess/">
            <input type="hidden" name="form-name" value="braintestingappointment" />
            <Columns>
                <Columns.Column>
                    <Form.Field>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control>
                            <Form.Input placeholder="John" name="first-name" required />
                        </Form.Control>
                    </Form.Field>
                </Columns.Column>
                <Columns.Column>
                    <Form.Field>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control>
                            <Form.Input placeholder="Smith" name="last-name" required />
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
                <Form.Label>Existing Patient?</Form.Label>
                <Form.Control>
                    <Form.Radio name="existing-patient" value="Yes">
                        Yes
                    </Form.Radio>
                    <Form.Radio name="existing-patient" value="No">
                        No
                    </Form.Radio>
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Button color="success" outlined={true} fullwidth={true} type="submit">
                    Submit
                </Button>
            </Form.Field>
        </form>
    );
}
