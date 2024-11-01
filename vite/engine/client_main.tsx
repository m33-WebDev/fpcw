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
