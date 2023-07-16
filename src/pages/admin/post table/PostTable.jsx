import { Link } from "react-router-dom";
import "./PostTable.css";
import AdminSidebar from "../AdminSidebar";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { deletepost, getAllPosts } from "../../../redux/apicalls/postApiCall";
import { useEffect } from "react";

const PostTable = () => {
  const dispatch = useDispatch();
  const { post: posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  // Delete post Handler
  const deletepostHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletepost(id));
      }
    });
  };
  return (
    <div className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">Posts</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Post title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image-wrapper">
                    <img
                      src={post?.user?.profilePhoto?.url}
                      alt="post"
                      className="table-image"
                    />
                    <span className="table-username">
                      {post?.user?.username}
                    </span>
                  </div>
                </td>
                <td className="table-username">{post?.titel}</td>
                <td>
                  <div className="table-button-group">
                    <button className="view">
                      <Link to={`/posts/details/${post?._id}`}>View Post</Link>
                    </button>
                    <button
                      onClick={() => deletepostHandler(post?._id)}
                      className="delete"
                    >
                      Delete Post
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostTable;
