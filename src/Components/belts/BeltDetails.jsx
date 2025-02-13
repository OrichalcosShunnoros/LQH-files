import { beltData } from "./../BeltTable/BeltDt";
import PropTypes from "prop-types";
import "./BeltInfo.css";

export const BeltDetails = ({ selectedBelt }) => {
  const belt = beltData.find((b) => b.name === selectedBelt);

  if (!belt) return <p>No se encontró información.</p>;

  return (
    <div className="belt-details">
      <div className="belt-header">
        <div>
          <h2>{belt.name}</h2>
        </div>
      </div>
      <div className="belt-sections">
        {belt.sections.map((section, index) => (
          <div key={index} className="belt-section">
            <h3>{section.title}</h3>
            <div>{section.content.map((item, i) => <p key={i}>{item}</p>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

BeltDetails.propTypes = {
  selectedBelt: PropTypes.string.isRequired,
};