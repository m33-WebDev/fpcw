import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "bulma/css/bulma.css";

import { hydrateRoot } from "react-dom/client";

// @ts-ignore: import will be replaced with actual path during build
import Component from "./<!--path-->";

/**
 * Browser entry point. Responsible for hydrating the pre-rendered DOM.
 */
function main() {
    const root = document.getElementById("root") as HTMLElement;
    hydrateRoot(root, <Component />);
}

main();
