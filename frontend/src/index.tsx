import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import '@blueprintjs/core/lib/css/blueprint.css';
import "@blueprintjs/table/lib/css/table.css";

import { Index } from "./components";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
        <Index />
    </BrowserRouter>
  </React.StrictMode>,
);
