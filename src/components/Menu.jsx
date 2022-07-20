import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div>Menu</div>

      <div>
        <NavLink
          to="/gifDisplay "
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          end
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Login
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Register
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Favorites
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/searchPage"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Search Gifs
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
