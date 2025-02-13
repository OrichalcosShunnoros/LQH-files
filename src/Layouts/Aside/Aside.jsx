import { Configure } from "../../Components/Configure/Configure";
import { Dashboard } from '../../pages/dashboard/Dashboard';
import { HeadNav } from "../../Components/HeadNav/HeadNav";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PropTypes } from 'prop-types';
import { useState } from "react";
import "./Aside.css";

export const Aside = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

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
            top: "2px",
            left: "10px",
            position: "absolute",
            
            color: "#ccc",
            background: "transparent",
            border: "none",
            borderRadius: "5px",
            
            fontWeight: "bolder",
            fontSize: "2.5rem",
            
            cursor: "pointer",
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
          top: "0",
          left: "0",
          position: "fixed",

          background: "#555",
          color: "#fff",
          
          overflow: "hidden",
          transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
          transform: isCollapsed ? "translateX(-100%)" : "translateX(0)",
        }}
      >

        <button
          onClick={handleToggle}
          style={{
            top: "0",
            right: "10px",
            position: "absolute",
          
            background: "transparent",
            color: "#ccc",
            border: "none",
            borderRadius: "5px",
            
            fontWeight: "bolder",
            fontSize: "2.5rem",
            
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
        &lt;
        </button>

        <HeadNav />
        <Navbar />
        <Configure onShowDashboard={setShowDashboard} /> 
      </aside>

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
