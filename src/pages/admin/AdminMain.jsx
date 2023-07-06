import { Link } from "react-router-dom";
import "./Admin.css";
import AddCategoryForm from "./AddCategoryForm";

const AdminMain = () => {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/users-table">
              See All Users
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Posts</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/posts-table">
              See All Posts
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Categories</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="/admin-dashboard/Categories-table"
            >
              See All Categories
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Comment</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="/admin-dashboard/comment-table"
            >
              See All Comment
            </Link>
          </div>
        </div>
      </div>
      <AddCategoryForm />
    </div>
  );
};

export default AdminMain;
