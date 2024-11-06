import { Footer } from "./footer";
import { Header } from "./header";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <div style={{ minHeight: "calc(100vh - 3.25rem)", backgroundColor: "hsl(0, 0%, 96%)" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}
