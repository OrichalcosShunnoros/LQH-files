import PropTypes from "prop-types";
import { beltsData } from "./beltData";
import "./BeltInfo.css";

export const BeltDetails = ({ selectedBelt }) => {
  const belt = beltsData.find((b) => b.name === selectedBelt);

  if (!belt) return <p>No se encontró información.</p>;

  return (
    <div className="belt-details">
      <div className="belt-header">
        {/* <img src={belt.image} alt={belt.name} className="belt-image" /> */}
        <div>
          <h2>{belt.name}</h2>
          <p>{belt.poomsae}</p>
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