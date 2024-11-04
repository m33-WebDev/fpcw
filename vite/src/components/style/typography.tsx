import { styled } from "styled-components";

export interface TypographyProps {
    $family?: "primary" | "secondary";
    $size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
    $color?: "primary" | "secondary" | "interactive" | "disabled" | "error";
    $weight?: "light" | "regular" | "heavy";
}

export const Typography = styled.p<TypographyProps>`
    font-family: ${({ $family }) => families[$family ?? "primary"]}, sans-serif;
    font-weight: ${({ $weight }) => weights[$weight ?? "regular"]};
    font-size: ${({ $size }) => sizes[$size ?? "xs"]};
    line-height: ${({ $size }) => lineHeights[$size ?? "xs"]};
    color: ${({ $color }) => colors[$color ?? "primary"]};
`;

const families = {
    primary: "Nunito",
    secondary: "Playfair Display",
};

const weights = {
    light: "300",
    regular: "400",
    heavy: "500",
};

const sizes = {
    xxs: ".75rem",
    xs: "1rem",
    s: "1.25rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
};

const lineHeights = {
    xxs: "1.625",
    xs: "1.5",
    s: "1.5",
    m: "1.5",
    l: "1.375",
    xl: "1.25",
    xxl: "1.125",
};

const colors = {
    primary: "#494949",
    secondary: "hsl(0, 0%, 71%)",
    interactive: "#48C774",
    disabled: "#EAEAEA",
    error: "#CB4A4D",
};
