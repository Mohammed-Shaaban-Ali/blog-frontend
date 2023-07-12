import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { aaddcategories } from "../../redux/apicalls/categoruApiCall";

const AddCategoryForm = () => {
  const dispatch = useDispatch();

  const [title, settitle] = useState("");

  const handelForm = (e) => {
    e.preventDefault();

    if (title.trim() === "") return toast.error("Enter the Category ");
    dispatch(aaddcategories({ title }));
    settitle("");
  };

  return (
    <div className="add-categoty">
      <h6 className="add-categoty-title">Add New Category</h6>
      <form onSubmit={handelForm}>
        <div className="add-categoty-form-groub">
          <label htmlFor="title">Category Title</label>
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            id="texe"
            placeholder="Enter Category Title"
          />
        </div>
        <button type="submit" className="add-categoty-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
