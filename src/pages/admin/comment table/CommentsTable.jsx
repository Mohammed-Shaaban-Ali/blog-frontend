import "./CommentsTable.css";
import AdminSidebar from "../AdminSidebar";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteComment,
  getAllcomments,
} from "../../../redux/apicalls/commentApiCall";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CommentsTable = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getAllcomments());
  }, [dispatch, comments]);
  // Delete comment Handler
  const deletecommentHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteComment(id));
      }
    });
  };
  return (
    <div className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">Comments</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div className="table-image-wrapper">
                    <img
                      src={item.user.profilePhoto.url}
                      alt="post"
                      className="table-image"
                    />
                    <span className="table-username">{item.username}</span>
                  </div>
                </td>
                <td className="table-username">{item.text}</td>
                <td>
                  <div className="table-button-group">
                    <button className="view">
                      <Link to={`/posts/details/${item.postId}`}>
                        View Post
                      </Link>
                    </button>
                    <button
                      onClick={() => deletecommentHandler(item._id)}
                      className="delete"
                    >
                      Delete comment
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

export default CommentsTable;
