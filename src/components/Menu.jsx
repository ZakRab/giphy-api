import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div>MENU</div>

      <div>
        <NavLink
          to="/searchPage"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Search Gifs
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/gifDisplay "
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          end
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Login
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/registerPage"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Register
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Favorites
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Menu;
