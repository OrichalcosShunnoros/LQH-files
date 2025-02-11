import { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HeadNav } from "../../Components/HeadNav/HeadNav";
import { Configure } from "../../Components/Configure/Configure";
import { PropTypes } from 'prop-types';
import { Dashboard } from '../../pages/dashboard/Dashboard';
import "./Aside.css";

export const Aside = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false); // Estado del modal

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  return (
    <>
      {isCollapsed && (
        <button 
          onClick={handleToggle}
          style={{
            position: "absolute",
            top: "2px",
            left: "10px",
            background: "transparent",
            color: "#ccc",
            fontWeight: "bolder",
            border: "none",
            fontSize: "2.5rem",
            cursor: "pointer",
            borderRadius: "5px",
            zIndex: "1000",
            transition: "transform 0.3s ease",
          }}
        >
          &gt;
        </button>
      )}

      <aside
        style={{
          width: isCollapsed ? "0px" : "250px",
          height: "100vh",
          background: "#555",
          color: "#fff",
          position: "fixed",
          left: "0",
          top: "0",
          overflow: "hidden",
          transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
          transform: isCollapsed ? "translateX(-100%)" : "translateX(0)",
        }}
      >

        <button
          onClick={handleToggle}
          style={{
            position: "absolute",
            top: "0",
            right: "10px",
            background: "transparent",
            color: "#ccc",
            fontWeight: "bolder",
            fontSize: "2.5rem",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background 0.3s ease",
          }}
        >
        &lt;
        </button>

        <HeadNav />
        <Navbar />
        <Configure onShowDashboard={setShowDashboard} /> {/* Pasamos la función */}
      </aside>

      {/* Modal fuera del aside para que siempre se muestre */}
      {showDashboard && (
        <div className="modal-overlay" onClick={() => setShowDashboard(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowDashboard(false)}>✖</button>
            <Dashboard />
          </div>
        </div>
      )}
    </>
  );
};

Aside.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
