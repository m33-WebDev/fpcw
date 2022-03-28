import React from "react";
import { Button, Form } from "react-bulma-components";
import styled from "styled-components";

const action =
    "https://cuttingedgepsychiatry.us19.list-manage.com/subscribe/post?u=facdc7abe706e043dbfd4ead6&amp;id=2b9b2f9f34";

export function NewsletterSignup() {
    return (
        <>
            <h5>Connect with us</h5>
            <p>
                Want to learn more? Sign up for our newsletter and stay up to date with the latest developments in
                mental health management.
            </p>
            <form action={action} method="post" target="_blank">
                <Form.Field>
                    <Form.Control className="control">
                        <Form.Input type="email" id="email" name="EMAIL" placeholder="Email address" required />
                    </Form.Control>
                </Form.Field>
                <div aria-hidden="true">
                    <Honeypot type="text" name="b_facdc7abe706e043dbfd4ead6_2b9b2f9f34" tabindex="-1" value="" />
                </div>
                <Button type="submit" color="success" outlined={true} fullwidth={true}>
                    Subscribe
                </Button>
            </form>
        </>
    );
}

const Honeypot = styled.div`
    display: "none";
`;
