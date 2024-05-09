import React from "react"; //node_module'ist
import ReactDOM from "react-dom/client"; //node-module'ist
import { BrowserRouter } from "react-router-dom"; //node_module'ist
//kui on loogelised sulud, siis võtab tüki sellest moodulist
//kui ei ole {}, siis võtab terve selle mooduli
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css"; //meie failist
// import App, { router } from "./App"; //uuemeelsem router'damine
// import { RouterProvider } from "react-router-dom";  //uuemeelsem router'damine
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
);
