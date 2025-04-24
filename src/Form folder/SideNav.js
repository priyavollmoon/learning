import React from "react";
import { NavLink } from "react-router-dom";
import "./Form.css";

function SideNav() {
  return (
    <div className="nav flex-column  ">
      <h1 className=" text-center">Navpages</h1>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/HoverCards"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        HoverCards
      </NavLink>
      <NavLink
        to="/LoginForm"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Form
      </NavLink>
    </div>
  );
}

export default SideNav;
