import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menyy from "./components/Menyy";
import Courses from "./pages/Courses";
import Hobbies from "./pages/Hobbies";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menyy />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
