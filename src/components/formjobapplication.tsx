import { faEnvelope, faPhone, faStethoscope, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Block, Columns, Form, Icon } from "react-bulma-components";
import { Button, Typography } from "./style";

const positions = [
    "Psychiatrist",
    "Psychiatric Nurse Practitioner",
    "Licensed Marriage and Family Therapist",
    "Psychologist",
    "Licensed Clinical Social Worker"
];

export function FormJobApplication() {
    const [resume, setResume] = useState<any>();

    function onUpload(event) {
        const files = event.target.files;
        setResume(files);
    }

    return (
        // @ts-expect-error: 'netlify' attribute does not exist on HTML form tag
        <form name="jobapplication" method="POST" netlify="true" action="/formsuccess/" encType="multipart/form-data">
            <input type="hidden" name="form-name" value="jobapplication" />
            <Block>
                <Typography as="h1" size="xxl">
                    Application
                </Typography>
            </Block>
            <Form.Field>
                <Form.Label>
                    <Typography family="secondary">Position</Typography>
                </Form.Label>
                <Form.Control>
                    <Form.Select color="success">
                        {positions.map(pos => {
                            return <option key={pos}>{pos}</option>;
                        })}
                    </Form.Select>
                    <Icon align="left">
                        <FontAwesomeIcon icon={faStethoscope} />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Columns>
                <Columns.Column>
                    <Form.Field>
                        <Form.Label>
                            <Typography family="secondary">First Name</Typography>
                        </Form.Label>
                        <Form.Control>
                            <Form.Input placeholder="John" name="firstname" />
                        </Form.Control>
                    </Form.Field>
                </Columns.Column>
                <Columns.Column>
                    <Form.Field>
                        <Form.Label>
                            <Typography family="secondary">Last Name</Typography>
                        </Form.Label>
                        <Form.Control>
                            <Form.Input placeholder="Smith" name="lastname" />
                        </Form.Control>
                    </Form.Field>
                </Columns.Column>
            </Columns>
            <Form.Field>
                <Form.Label>
                    <Typography family="secondary">Email</Typography>
                </Form.Label>
                <Form.Control>
                    <Form.Input placeholder="johnsmith@gmail.com" name="email" />
                    <Icon align="left">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                    <Typography family="secondary">Phone</Typography>
                </Form.Label>
                <Form.Control>
                    <Form.Input placeholder="(123) 456-7890" name="phone" />
                    <Icon align="left">
                        <FontAwesomeIcon icon={faPhone} />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                    <Typography family="secondary">Resume</Typography>
                </Form.Label>
                <Form.Control>
                    <Form.InputFile
                        color="success"
                        fullwidth={true}
                        align="right"
                        label="Upload"
                        icon={<FontAwesomeIcon icon={faUpload} />}
                        filename={resume ? resume[0].name : " "}
                        value={resume ? resume : undefined}
                        onChange={onUpload}
                        // @ts-expect-error: @todo: need to sort out input file typing
                        name="resume"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Button text="Submit" />
            </Form.Field>
        </form>
    );
}
