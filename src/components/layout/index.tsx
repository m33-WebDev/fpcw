import React from "react";
import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";

import favicon16 from "../../images/favicon16.png";
import favicon32 from "../../images/favicon32.png";
import favicon64 from "../../images/favicon64.png";

export function Head() {
    return [
        [favicon16, 16],
        [favicon32, 32],
        [favicon64, 64]
    ].map(([icon, size]) => <link rel="icon" type="image/png" sizes={`${size}x${size}`} href={`${icon}`} />);
}

export function Layout({ children }) {
    return (
        <>
            <Header />
            <Site>{children}</Site>
            <Footer />
        </>
    );
}

function getFavicon(size, icon) {
    return {
        rel: "icon",
        type: "image/png",
        sizes: size.toString() + "x" + size.toString(),
        href: `${icon}`
    };
}

const Site = styled.div`
    min-height: calc(100vh - 3.25rem);
`;
