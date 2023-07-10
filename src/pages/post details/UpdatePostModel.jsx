import React, { useEffect, useState } from "react";
import "./UpdatePostModel.css";
import { FaTimes } from "react-icons/fa"; // x
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updatepost } from "../../redux/apicalls/postApiCall";
import { getcategories } from "../../redux/apicalls/categoruApiCall";

const UpdatePostModel = ({ post, setUpdatePost }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [titel, setTitle] = useState(post?.titel);
  const [descrption, setDescription] = useState(post?.descrption);
  const [category, setCategory] = useState(post?.category);

  useEffect(() => {
    dispatch(getcategories());
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (titel.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (descrption.trim() === "")
      return toast.error("Post Descripton is required");

    dispatch(updatepost({ titel, category, descrption }, post?._id));
    setUpdatePost(false);
  };
  return (
    <div className="update-post">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <FaTimes
            onClick={() => setUpdatePost(false)}
            className="update-post-form-close"
          />
        </abbr>
        <h1 className="update-post-title">Update Post </h1>
        <input
          value={titel}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="update-post-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="update-post-input"
        >
          <option disabled value="">
            Select Category
          </option>
          {categories?.map((category) => (
            <option key={category} value={category.titel}>
              {category.title}
            </option>
          ))}
        </select>
        <textarea
          value={descrption}
          onChange={(e) => setDescription(e.target.value)}
          className="update-post-textarea"
          rows="5"
        ></textarea>
        <button type="submit" className="update-post-btn">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePostModel;
