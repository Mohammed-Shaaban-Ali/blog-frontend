import { Link } from "react-router-dom";
import "./CategoryTable.css";
import AdminSidebar from "../AdminSidebar";
import swal from "sweetalert";

const CategoryTable = () => {
  // Delete category Handler
  const deletecategoryHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("category has been deleted!", {
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
        <h1 className="table-title">categories</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>category titel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item}>
                <td>{item}</td>

                <td className="table-username">music</td>
                <td>
                  <div className="table-button-group">
                    <button onClick={deletecategoryHandler} className="delete">
                      Delete category
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

export default CategoryTable;
