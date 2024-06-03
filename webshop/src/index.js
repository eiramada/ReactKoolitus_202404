import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import { CartSumContextProvider } from "./store/CartSumContext";
import { AuthContextProvider } from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode teeb jõuga 2 renderdamist. Kui selle maha võtta, siis renderdab ainult 1 korra.
  // npm run build võtab maha strictMode'i, ehk päriskeskkonnas renderdatakse 1 korra.
  // mitu renderdamist tehase vb nt vigade leidmiseks.
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartSumContextProvider>
          <App />
        </CartSumContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
