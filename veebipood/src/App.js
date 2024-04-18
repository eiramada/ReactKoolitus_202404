import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Kinkekaart from "./pages/Kinkekaart";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Ostukorv from "./pages/Ostukorv";
import Menyy from "./components/Menyy";
import Lisatoode from "./pages/LisaToode";
import Seaded from "./pages/Seaded";
import NotFound from "./pages/NotFound";

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
    </div>
  );
}
export default App;
