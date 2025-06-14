import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");
const reactRoot = createRoot(root);


reactRoot.render(<App />);
serviceWorker.register();