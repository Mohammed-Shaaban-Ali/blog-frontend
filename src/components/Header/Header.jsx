import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // x
import { BsPencil } from "react-icons/bs";

function Header() {
  const [toggel, setToggrl] = useState(false);
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <strong>BLOG</strong>
          <BsPencil />
        </div>
        <div className="header-menu" onClick={() => setToggrl(!toggel)}>
          {toggel ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div
        style={{
          clipPath: toggel && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className="navbar"
      >
        <ul className="nav-likes">
          <NavLink
            to="/"
            onClick={() => setToggrl(false)}
            className={({ isActive }) => (isActive ? "active" : "nav-like")}
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            onClick={() => setToggrl(false)}
            className={({ isActive }) => (isActive ? "active" : "nav-like")}
          >
            Posts
          </NavLink>
          <NavLink
            to="/posts/create-post"
            onClick={() => setToggrl(false)}
            className={({ isActive }) => (isActive ? "active" : "nav-like")}
          >
            Create
          </NavLink>
          <NavLink
            to="/admin-dashboard"
            onClick={() => setToggrl(false)}
            className={({ isActive }) => (isActive ? "active" : "nav-like")}
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="header-right">
        <Link to="/register" className="header-right-link">
          <span>Register</span>
        </Link>
        <Link to="/login" className="header-right-link">
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
