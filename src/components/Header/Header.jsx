import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" onClick={() => setToggrl(false)} className="nav-like">
            Home
          </Link>
          <Link
            to="/posts"
            onClick={() => setToggrl(false)}
            className="nav-like"
          >
            Posts
          </Link>
          <Link
            to="/posts/create-post"
            onClick={() => setToggrl(false)}
            className="nav-like"
          >
            Create
          </Link>
          <Link
            to="/admin-dashboard"
            onClick={() => setToggrl(false)}
            className="nav-like"
          >
            Dashboard
          </Link>
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
