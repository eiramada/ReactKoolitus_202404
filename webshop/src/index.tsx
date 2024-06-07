import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import { AuthContextProvider } from "./store/AuthContext";
import { CartSumContextProvider } from "./store/CartSumContext";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // React.StrictMode teeb jõuga 2 renderdamist. Kui selle maha võtta, siis renderdab ainult 1 korra.
  // npm run build võtab maha strictMode'i, ehk päriskeskkonnas renderdatakse 1 korra.
  // mitu renderdamist tehase vb nt vigade leidmiseks.
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartSumContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CartSumContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
