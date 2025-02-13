import PropTypes from 'prop-types'
import './loader.css'

export const Loader = ({ category }) => {
  return (
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">{category}</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="text">Loading...</div>
    </div>
  )
}

Loader.propTypes = {
  category: PropTypes.string.isRequired,
};
