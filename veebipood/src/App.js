import { Navigate, Route, Routes } from "react-router-dom";
// import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Menyy from "./components/Menyy";
import Ariklient from "./pages/Ariklient";
import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Lisatoode from "./pages/LisaToode";
import NotFound from "./pages/NotFound";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";

export function App() {
  return (
    <div className="App">
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
