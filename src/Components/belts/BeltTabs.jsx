import { belts } from "./BeltData";
import "./BeltInfo.css";
import PropTypes from "prop-types";

export const BeltTabs = ({ selectedBelt, setSelectedBelt }) => {
  return (
    <div className="belt-tabs">
      {belts.map((belt) => (
        <button
          key={belt.name}
          className={`belt-tab ${selectedBelt === belt.name ? "active" : ""}`}
          onClick={() => setSelectedBelt(belt.name)}
        >
          {belt.name}
        </button>
      ))}
    </div>
  );
};

BeltTabs.propTypes = {
    selectedBelt: PropTypes.string.isRequired,
    setSelectedBelt: PropTypes.func.isRequired,
  };