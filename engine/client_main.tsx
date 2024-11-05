import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "<!--base-->/styles/global.scss";

import { createRoot, hydrateRoot } from "react-dom/client";

// @ts-ignore: import will be replaced with actual path during build
import Component from "./<!--source-->";

// @ts-ignore: import will be replaced with actual path during build
import props from "./<!--props-->";

import React from "react";

/**
 * Browser entry point. Responsible for hydrating the pre-rendered DOM.
 */
function main() {
    const mount = document.getElementById("root") as HTMLElement;
    const node = React.createElement(Component, props);
    const mode = "<!--mode-->";
    // @ts-ignore: mode will be one of 'develop' or 'build'
    if (mode === "develop") {
        const root = createRoot(mount);
        root.render(node);
    } else {
        hydrateRoot(mount, node);
    }
}

main();
