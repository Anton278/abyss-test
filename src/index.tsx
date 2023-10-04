import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";

import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
