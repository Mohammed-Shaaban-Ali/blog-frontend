import { Link } from "react-router-dom";
import { posts } from "../../../dummyData";
import "./PostTable.css";
import AdminSidebar from "../AdminSidebar";
import imagepath from "../../../images/user-avatar.png";
import swal from "sweetalert";

const PostTable = () => {
  // Delete post Handler
  const deletepostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
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
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image-wrapper">
                    <img src={imagepath} alt="image" className="table-image" />
                    <span className="table-username">{post.user.username}</span>
                  </div>
                </td>
                <td className="table-username">{post.title}</td>
                <td>
                  <div className="table-button-group">
                    <button className="view">
                      <Link to={`/posts/details/${post._id}`}>View Post</Link>
                    </button>
                    <button onClick={deletepostHandler} className="delete">
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
