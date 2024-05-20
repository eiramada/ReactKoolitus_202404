import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SSRProvider>
        <App />
      </SSRProvider>
    </BrowserRouter>
  </React.StrictMode>
);
