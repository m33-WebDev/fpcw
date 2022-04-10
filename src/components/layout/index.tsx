import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Header } from "./header";
import { Footer } from "./footer";

import favicon16 from "../../images/favicon16.png";
import favicon32 from "../../images/favicon32.png";
import favicon64 from "../../images/favicon64.png";

export function Layout({ children }) {
    return (
        <>
            <Helmet link={[getFavicon(16, favicon16), getFavicon(32, favicon32), getFavicon(64, favicon64)]} />
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
    background-color: hsl(0, 0%, 96%);
`;
