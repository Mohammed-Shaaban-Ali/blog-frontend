import { useState } from "react";
import { toast } from "react-toastify";

import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [file, setFile] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "")
      return toast.error("Post description is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", file);

    console.log({ title, category, description, file });
  };

  return (
    <section className="create-post">
      <h1 className="create-post-title">Create New Post</h1>
      <form onSubmit={handelSubmit} className="create-post-form">
        <input
          type="text"
          placeholder="Post Title"
          className="create-post-input form-children"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          type="text"
          className="create-post-input form-children"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value="" disabled>
            Select A category
          </option>
          <option value="music">Music </option>
          <option value="coffee">coffee </option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          rows="7"
          className="create-post-textatea form-children"
          placeholder="Post description"
        ></textarea>
        <input
          value={file}
          onChange={(e) => setFile(e.target.value)}
          type="file"
          name="file"
          id="file"
          className="create-post-upload form-children"
        />

        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
