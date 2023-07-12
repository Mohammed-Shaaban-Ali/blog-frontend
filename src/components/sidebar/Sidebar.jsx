import React, { useEffect } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getcategories } from "../../redux/apicalls/categoruApiCall";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);
  return (
    <div className="sidebar">
      <div className="sidebar-title">CATEGORY</div>
      <div className="sidebar-links">
        {categories?.map((category) => (
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
