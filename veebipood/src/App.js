import { Navigate, Route, Routes } from "react-router-dom";
// import { Outlet, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Menyy from "./components/Menyy";
import Ariklient from "./pages/Ariklient";
import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/Esindused";
import HaldaEsindused from "./pages/HaldaEsindused";
import HaldaHinnad from "./pages/HaldaHinnad";
import HaldaTootajad from "./pages/HaldaTootajad";
import HaldaTooted from "./pages/HaldaTooted";
import Hinnad from "./pages/Hinnad";
import Kinkekaart from "./pages/Kinkekaart";
import Lisatoode from "./pages/LisaToode";
import MuudaEsindus from "./pages/MuudaEsindus";
import MuudaHind from "./pages/MuudaHind";
import MuudaToode from "./pages/MuudaToode";
import MuudaTootaja from "./pages/MuudaTootaja";
import NotFound from "./pages/NotFound";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";
import Tootajad from "./pages/Tootajad";
import Tooted from "./pages/Tooted";
import YksEsindus from "./pages/YksEsindus";
import YksHind from "./pages/YksHind";
import YksToode from "./pages/YksToode";
import YksTootaja from "./pages/YksTootaja";
import Shops from "./pages/Shops";
//Ta võtab ainult  ContactUs osa, sest ContactUs.jsx-is pole 'export default'
import { ContactUs } from "./pages/ContactUS";

export function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" ? true : false
  );
  // kui mul oleks useState("false"), siis darkMode ? "App" ... puhul oleks alati true, sest see kontrollib,
  // kas jutumärkide sees midagigi on.

  //localStorage's on alati sõnad

  function toLightMode() {
    setDarkMode(false);
    localStorage.setItem("isDarkMode", false);

    //setDarkMode läheb alles pärast localStoraget tegelt käima, ehk darkMode on localStrage.setItemi puhul veel vana.
    //isegi, kui setDarkMode on enne localStoraget
  }

  function toDarkMode() {
    localStorage.setItem("isDarkMode", true);
    setDarkMode(true);
  }

  return (
    <div className={darkMode ? "App-darkMode" : "App"}>
      {darkMode && (
        <img
          className="mode-button"
          onClick={toLightMode}
          src="/light-mode.png"
          alt="light mode button"
        />
      )}
      {!darkMode && (
        <img
          className="mode-button"
          onClick={toDarkMode}
          src="/dark-mode.png"
          alt="dark mode button"
        />
      )}

      <Menyy />

      {/* path="", mis järgneb localhost:3000-le, ja <div>, millist sisu näidatakse*/}
      <Routes>
        <Route path="" element={<Navigate to="/avaleht" />}></Route>
        <Route path="avaleht" element={<Avaleht />}></Route>
        <Route path="osta-kinkekaart" element={<Kinkekaart />}></Route>
        <Route path="esindused" element={<Esindused />}></Route>
        <Route path="ärikliendile" element={<Ariklient />}></Route>
        <Route path="ostukorv" element={<Ostukorv />}></Route>
        <Route path="lisa-toode" element={<Lisatoode />}></Route>
        <Route path="seaded" element={<Seaded />}></Route>
        <Route path="tooted" element={<Tooted />}></Route>
        <Route path="hinnad" element={<Hinnad />}></Route>
        <Route path="tootajad" element={<Tootajad />}></Route>
        <Route path="halda-tootajad" element={<HaldaTootajad />}></Route>
        <Route path="halda-esindused" element={<HaldaEsindused />}></Route>
        <Route path="halda-hinnad" element={<HaldaHinnad />}></Route>
        <Route path="halda-tooted" element={<HaldaTooted />}></Route>
        <Route path="toode/:index" element={<YksToode />}></Route>
        <Route path="hind/:summa" element={<YksHind />}></Route>
        <Route path="tootaja/:index" element={<YksTootaja />}></Route>
        <Route path="esindus/:linn/:index" element={<YksEsindus />}></Route>
        <Route path="muuda-hind/:index" element={<MuudaHind />}></Route>
        <Route path="muuda-esindus/:linn/:index" element={<MuudaEsindus />}></Route>
        <Route path="muuda-toode/:index" element={<MuudaToode />}></Route>
        <Route path="muuda-tootaja/:index" element={<MuudaTootaja />}></Route>
        <Route path="shops" element={<Shops />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <div>
        <Outlet />
      </div> */}
    </div>
  );
}
export default App;

// Firebase-i üleslaadimiseks on vaja:
// npm run build
// firebase deploy

// Sedasi peaks kaasaegne React-Router olema seadistatud vastavalt reactrouter.com soovitustele. See, mis seal varem oli, on ka toimiv, aga see ilmselt kaob mingi aja pärast ära.
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {path: "", element: <Avaleht />},
//       {path: "avaleht", element: <Avaleht />},
//       {path: "osta-kinkekaart", element: <Kinkekaart />},
//       {path: "esindused", element: <Esindused />},
//       {path: "ärikliendile", element: <Ariklient />},
//       {path: "ostukorv", element: <Ostukorv />},
//       {path: "lisa-toode", element: <Lisatoode />},
//       {path: "seaded", element: <Seaded />},
//       {path: "*", element: <NotFound />},
//     ]
//   }
// ]);
