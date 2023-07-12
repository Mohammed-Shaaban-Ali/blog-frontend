import { Link } from "react-router-dom";

import "./AdminTable.css";
import AdminSidebar from "../AdminSidebar";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProfile,
  getAllProfiles,
} from "../../../redux/apicalls/profileApiCall";
import { useEffect } from "react";

const AdminTable = () => {
  const dispatch = useDispatch();
  const { allprofiles, isAccountDeleted } = useSelector(
    (state) => state.profiles
  );

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch, isAccountDeleted]);

  // Delete user Handler
  const deleteuserHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProfile(id));
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
            {allprofiles?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div className="table-image-wrapper">
                    <img
                      src={item.profilePhoto.url}
                      alt="post"
                      className="table-image"
                    />
                    <span className="table-username">{item.username}</span>
                  </div>
                </td>
                <td className="table-username">{item.email}</td>
                <td>
                  <div className="table-button-group">
                    <button className="view">
                      <Link to={`/profile/${item.id}`}>View Profile</Link>
                    </button>
                    <button
                      onClick={() => deleteuserHandler(item.id)}
                      className="delete"
                    >
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
