import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CRProfile from "../src/components/pages/CRProfile/CRProfile";
import CRSInfor from "../src/components/pages/CRStudentInfor/CRSInfor";
import CRListStudent from "../src/components/pages/CRListStudent/CRListStudent";
import CRAppList from "../src/components/pages/CRAppList/CRAppList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <CRProfile />
    <CRSInfor /> */}
    {/* <CRListStudent /> */}
    <CRAppList />
  </React.StrictMode>
);
