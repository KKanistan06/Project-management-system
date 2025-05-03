import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Project Information Management System</h1>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/registered-courses"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Registered Courses
          </NavLink>
          <NavLink
            to="/new-courses"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            New Courses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
