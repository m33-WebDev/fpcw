import { hydrateRoot } from "react-dom/client";

// @ts-ignore: import will be replaced with actual path during build
import Component from "./<!--path-->";

const root = document.getElementById("root") as HTMLElement;
hydrateRoot(root, <Component />);
