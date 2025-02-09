import { useState, useEffect } from "react";

export const Logo = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const reactLogoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "10rem",
    height: "10rem",
    transform: `rotate(${rotation}deg)`,
  };

  const nucleoStyle = {
    width: "2rem",
    height: "2rem",
    background: "#00d8ff",
    borderRadius: "50%",
    position: "absolute",
  };

  const ringStyle = {
    width: "12rem",
    height: "4rem",
    borderRadius: "50%",
    border: "4px solid #00d8ff",
    position: "absolute",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div style={reactLogoStyle}>
        <div style={nucleoStyle}></div>
        <div style={{ ...ringStyle, transform: "rotate(0deg)" }}></div>
        <div style={{ ...ringStyle, transform: "rotate(60deg)" }}></div>
        <div style={{ ...ringStyle, transform: "rotate(-60deg)" }}></div>
      </div>
    </div>
  );
}
