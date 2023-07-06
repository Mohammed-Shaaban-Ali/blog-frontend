import "./CommentsTable.css";
import AdminSidebar from "../AdminSidebar";
import imagepath from "../../../images/user-avatar.png";
import swal from "sweetalert";

const CommentsTable = () => {
  // Delete comment Handler
  const deletecommentHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("comment has been deleted!", {
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
            {[1, 2, 3, 4].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  <div className="table-image-wrapper">
                    <img src={imagepath} alt="image" className="table-image" />
                    <span className="table-username">mohamed shaaban</span>
                  </div>
                </td>
                <td className="table-username">thank you</td>
                <td>
                  <div className="table-button-group">
                    <button onClick={deletecommentHandler} className="delete">
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
