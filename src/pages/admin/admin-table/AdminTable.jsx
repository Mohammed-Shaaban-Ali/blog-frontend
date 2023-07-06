import { Link } from "react-router-dom";

import "./AdminTable.css";
import AdminSidebar from "../AdminSidebar";
import imagepath from "../../../images/user-avatar.png";
import swal from "sweetalert";

const AdminTable = () => {
  // Delete user Handler
  const deleteuserHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("user has been deleted!", {
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
        <h1 className="table-title">Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  <div className="table-image-wrapper">
                    <img src={imagepath} alt="image" className="table-image" />
                    <span className="table-username">mohamed shaaban</span>
                  </div>
                </td>
                <td className="table-username">ms7500746@gmail.com</td>
                <td>
                  <div className="table-button-group">
                    <button className="view">
                      <Link to="/profile.1">View Profile</Link>
                    </button>
                    <button onClick={deleteuserHandler} className="delete">
                      Delete User
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

export default AdminTable;
