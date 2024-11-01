import { styled } from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <Site>{children}</Site>
            <Footer />
        </>
    );
}

const Site = styled.div`
    min-height: calc(100vh - 3.25rem);
    background-color: hsl(0, 0%, 96%);
`;
