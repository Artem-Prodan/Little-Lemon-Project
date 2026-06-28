import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";
import "@fontsource/markazi-text/400.css";
import "@fontsource/markazi-text/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);