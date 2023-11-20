import React from "react";
import { Form } from "react-bulma-components";
import styled from "styled-components";
import { Button, Typography } from "./style";

const action =
    "https://cuttingedgepsychiatry.us19.list-manage.com/subscribe/post?u=facdc7abe706e043dbfd4ead6&amp;id=2b9b2f9f34";

export function NewsletterSignupForm() {
    return (
        <>
            <Typography family="secondary" as="h5" size="s">
                Connect with us
            </Typography>
            <Typography family="secondary">
                Want to learn more? Sign up for our newsletter and stay up to date with the latest developments in
                mental health management.
            </Typography>
            <form action={action} method="post" target="_blank">
                <Form.Field>
                    <Form.Control className="control">
                        <Form.Input type="email" id="email" name="EMAIL" placeholder="Email address" required />
                    </Form.Control>
                </Form.Field>
                <div aria-hidden="true">
                    <Honeypot type="text" name="b_facdc7abe706e043dbfd4ead6_2b9b2f9f34" tabIndex={-1} value="" />
                </div>
                <Button text="Submit" />
            </form>
        </>
    );
}

const Honeypot = styled.input`
    display: none;
`;
