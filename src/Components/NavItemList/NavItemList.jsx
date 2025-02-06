import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavItemList.css";

export const NavItemList = ({ items, basePath }) => {
  return (
    <ul>
      {items.map((item, index) => {
        const path = `${basePath}/${item.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <li key={index}>
            <NavLink to={path} activeclassname="active">
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
};
