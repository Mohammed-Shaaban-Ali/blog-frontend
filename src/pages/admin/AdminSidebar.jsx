import { Link } from "react-router-dom";
import "./Admin.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <Link to="/admin-dashboard" className="admin-sidebar-title">
        Dashboard
      </Link>
      <ul className="admin-dashboard-list">
        <Link className="admin-sidebar-link" to="/admin-dashboard/users-table">
          Users
        </Link>
        <Link className="admin-sidebar-link" to="/admin-dashboard/posts-table">
          Posts
        </Link>
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/categories-table"
        >
          Categories
        </Link>
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/comment-table"
        >
          Comments
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
