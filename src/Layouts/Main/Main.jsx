import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/Dashboard";
import { Second } from "../../pages/second/Second";
import { First } from "../../pages/first/First";
import { Third } from "../../pages/third/Third";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Main.css";

export const Main = ({ isCollapsed }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 10);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main
      className={`content ${isVisible ? "fade-in" : "fade-out"}`}
      style={{
        marginLeft: isCollapsed ? ".5rem" : "250px",
        width: isCollapsed ? "100%" : "calc(100% - 250px)",
        transition: "margin-left 0.5s ease, width 0.5s ease",
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/first/:category" element={<First />} />
        <Route path="/second/:category" element={<Second />} />
        <Route path="/third/:category" element={<Third />} />
      </Routes>
    </main>
  );
};

Main.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};
