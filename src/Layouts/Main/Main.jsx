import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./../../pages/dashboard/Dashboard";
import { First } from "../../pages/first/First";
import { Second } from "../../pages/second/Second";
import { Third } from "../../pages/third/Third";
import "./Main.css";

export const Main = () => {
  return (
    <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/first/:category" element={<First />} />
          <Route path="/second/:category" element={<Second />} />
          <Route path="/third/:category" element={<Third />} />
        </Routes>
    </main>
  )
}
