import { Footer } from "./footer";
import { Header } from "./header";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <div id="site" className="tw-min-h-[calc(100vh-3.25rem)]">
                {children}
            </div>
            <Footer />
        </>
    );
}
