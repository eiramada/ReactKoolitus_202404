import { Navigate, Route, Routes } from "react-router-dom";
// import { Outlet, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Menyy from "./components/Menyy";
import Ariklient from "./pages/Ariklient";
import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/Esindused";
import Hinnad from "./pages/Hinnad";
import Kinkekaart from "./pages/Kinkekaart";
import Lisatoode from "./pages/LisaToode";
import NotFound from "./pages/NotFound";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";
import Tootajad from "./pages/Tootajad";
import Tooted from "./pages/Tooted";

export function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" ? true : false
  );
  // kui mul oleks useState("false"), siis darkMode ? "App" ... puhul oleks alati true, sest see kontrollib,
  // kas jutumärkide sees midagigi on.

  //localStorage's on alati sõn

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
          src="light-mode.png"
          alt="light mode button"
        />
      )}
      {!darkMode && (
        <img
          className="mode-button"
          onClick={toDarkMode}
          src="dark-mode.png"
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <div>
        <Outlet />
      </div> */}
    </div>
  );
}
export default App;

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
