import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">CATEGORY</div>
      <div className="sidebar-links">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeSidebar" : "sidebar-link"
            }
            to={`/posts/categories/${category.title}`}
            key={category.title}
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
