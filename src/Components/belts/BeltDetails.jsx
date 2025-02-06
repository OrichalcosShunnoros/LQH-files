import "./BeltInfo.css";

export const BeltDetails = ({ belt }) => {
  return (
    <div className="belt-content">
      <div className="belt-header">
        <img src={belt.img} alt={belt.name} className="belt-image" />
        <div>
          <h2 className="belt-title">POOMSAE - {belt.name}</h2>
          <p className="belt-description">{belt.poomsae}</p>
        </div>
      </div>

      <div className="belt-info-grid">
        <div>
          <h3 className="belt-subtitle">POSICIONES - {belt.name}</h3>
          <ul>
            <li>Chariot Sogui</li>
            <li>ChuChum Sogui</li>
            <li>Ap Sogui</li>
            <li>ApKubi Sogui</li>
          </ul>
        </div>
        <div>
          <h3 className="belt-subtitle">MAKI (Defensas) - {belt.name}</h3>
          <ul>
            <li>Are Maki</li>
            <li>Montong Maki</li>
            <li>Olgul Maki</li>
            <li>JanSonnal Yop Maki</li>
          </ul>
        </div>
        <div>
          <h3 className="belt-subtitle">CHAGUI (Patadas) - {belt.name}</h3>
          <ul>
            <li>Ap Olgui</li>
            <li>Ap Chagui</li>
            <li>Yop Chagui</li>
            <li>Dollio Chagui</li>
          </ul>
        </div>
        <div>
          <h3 className="belt-subtitle">SAYU CHIRUGUI - {belt.name}</h3>
          <ul>
            <li><strong>Chua Sayu Chirugui</strong> (Pierna izda. atrás)</li>
            <li><strong>Ou Sayu Chirugui</strong> (Pierna dcha. atrás)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

BeltDetails.propTypes = {
  belt: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    poomsae: PropTypes.string.isRequired,
  }).isRequired,
};
