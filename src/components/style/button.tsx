import React from "react";
import * as bulma from "react-bulma-components";

export interface ButtonProps {
    /**
     * The text to display.
     */
    text: string;
    /**
     * The action to take.
     */
}

export function Button(props: ButtonProps) {
    return (
        <bulma.Button rounded={true} color="success">
            {props.text}
        </bulma.Button>
    );
}
