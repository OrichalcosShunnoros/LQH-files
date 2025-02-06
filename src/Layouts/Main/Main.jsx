import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./../../pages/dashboard/Dashboard";
import { Theory } from "./../../pages/theory/Theory";
import { Techniques } from "./../../pages/techniques/Techniques";
import { Movements } from "./../../pages/movements/Movements";
import "./Main.css";

export const Main = () => {
  return (
    <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/theory/:category" element={<Theory />} />
          <Route path="/techniques/:category" element={<Techniques />} />
          <Route path="/movements/:category" element={<Movements />} />
        </Routes>
    </main>
  )
}
