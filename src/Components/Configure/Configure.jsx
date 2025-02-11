import settings from '../../assets/settings.svg';
import { PropTypes } from 'prop-types'
import './Configure.css';

export const Configure = ({ onShowDashboard }) => {
  return (
    <div className="configure">
      <img 
        src={settings} 
        alt="settings" 
        title="settings" 
        onClick={(e) => {
          e.preventDefault();
          onShowDashboard(true);
        }}
      />
    </div>
  );
};

Configure.propTypes = {
  onShowDashboard: PropTypes.func.isRequired
}