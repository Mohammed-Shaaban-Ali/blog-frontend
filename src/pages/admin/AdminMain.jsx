import { Link } from "react-router-dom";
import "./Admin.css";
import AddCategoryForm from "./AddCategoryForm";
import { useSelector, useDispatch } from "react-redux";
import { getcategories } from "../../redux/apicalls/categoruApiCall";
import { useEffect } from "react";
import { getprofileCount } from "../../redux/apicalls/profileApiCall";
import { getPostsCount } from "../../redux/apicalls/postApiCall";
import { getAllcomments } from "../../redux/apicalls/commentApiCall";

const AdminMain = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { profileCount } = useSelector((state) => state.profiles);
  const { PostsCount } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getcategories());
    dispatch(getprofileCount());
    dispatch(getPostsCount());
    dispatch(getAllcomments());
  }, [dispatch]);
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">{profileCount}</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/users-table">
              See All Users
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Posts</h5>
          <div className="admin-card-count">{PostsCount}</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/posts-table">
              See All Posts
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Categories</h5>
          <div className="admin-card-count">{categories?.length}</div>
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
          <div className="admin-card-count">{comments?.length}</div>
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
