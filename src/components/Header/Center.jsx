import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Center = ({ toggel, setToggrl }) => {
  const { user } = useSelector((state) => state.auth);

  return (
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
        {user && (
          <NavLink
            to="/posts/create-post"
            onClick={() => setToggrl(false)}
            className={({ isActive }) => (isActive ? "active" : "nav-like")}
          >
            Create
          </NavLink>
        )}

        {user?.isAdmin ? (
          <NavLink
            to="/admin-dashboard"
            onClick={() => setToggrl(false)}
            className={({ isActive }) => (isActive ? "active" : "nav-like")}
          >
            Dashboard
          </NavLink>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Center;
