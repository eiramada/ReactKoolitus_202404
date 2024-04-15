import React from "react"; //node_module'ist
import ReactDOM from "react-dom/client"; //node-module'ist
import "./index.css"; //meie failist
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //node_module'ist
//kui on loogelised sulud, siis võtab tüki sellest moodulist
//kui ei ole {}, siis võtab terve selle mooduli

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
