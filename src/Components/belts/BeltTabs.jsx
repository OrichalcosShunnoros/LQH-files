import { beltData } from "./../BeltTable/BeltDt";
import PropTypes from "prop-types";
import "./BeltInfo.css";


const getTextColor = (hexColor) => {
  if (!hexColor) return "#000";
  const rgb = parseInt(hexColor.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000" : "#FFF";
};

export const BeltTabs = ({ selectedBelt, setSelectedBelt }) => {
  return (
    <div className="belt-tabs">
      {beltData.map((belt) => {
        const primaryColor = belt.color[0];
        const secondaryColor = belt.color[1] || primaryColor;

        return (
          <button
            key={belt.name}
            className="belt-tab"
            style={{
              background: `linear-gradient(180deg, ${primaryColor} 50%, ${secondaryColor} 50%)`,
              color: getTextColor(primaryColor),
              borderBottom: selectedBelt === belt.name ? "4px solid #000" : "none",
            }}
            onClick={() => setSelectedBelt(belt.name)}
          >
            {belt.name}
          </button>
        );
      })}
    </div>
  );
};

BeltTabs.propTypes = {
  selectedBelt: PropTypes.string.isRequired,
  setSelectedBelt: PropTypes.func.isRequired,
};