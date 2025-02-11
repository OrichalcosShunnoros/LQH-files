import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavItemList.css";

export const NavItemList = ({ items, basePath, selectedItem, onSelect }) => {
  return (
    <ul>
      {items.map((item, index) => {
        const path = `${basePath}/${item.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <li key={index}>
            <NavLink 
              to={path} 
              className={selectedItem === item ? "active" : ""}
              onClick={() => onSelect(item)}
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

NavItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  basePath: PropTypes.string.isRequired,
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
