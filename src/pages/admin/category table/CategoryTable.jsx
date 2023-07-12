import "./CategoryTable.css";
import AdminSidebar from "../AdminSidebar";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deletecategories,
  getcategories,
} from "../../../redux/apicalls/categoruApiCall";

const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);
  // Delete category Handler
  const deletecategoryHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletecategories(id));
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
            {categories.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

                <td className="table-username">{item.title}</td>
                <td>
                  <div className="table-button-group">
                    <button
                      onClick={() => deletecategoryHandler(item._id)}
                      className="delete"
                    >
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
