import React, { useState } from "react";
import "./UpdatePostModel.css";
import { FaTimes } from "react-icons/fa"; // x
import { toast } from "react-toastify";

const UpdatePostModel = ({ post, setUpdatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [category, setCategory] = useState(post.category);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "")
      return toast.error("Post Descripton is required");

    console.log({ title, category, description });
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
          value={title}
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
          <option value="music">music</option>
          <option value="travling">travling</option>
        </select>
        <textarea
          value={description}
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
