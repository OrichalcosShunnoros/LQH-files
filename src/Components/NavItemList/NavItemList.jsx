import PropTypes from 'prop-types';
import './NavItemList.css';

export const NavItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

NavItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
