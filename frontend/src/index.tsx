import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CRProfile from "../src/components/pages/Company/CRProfile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CRProfile />
  </React.StrictMode>
);
