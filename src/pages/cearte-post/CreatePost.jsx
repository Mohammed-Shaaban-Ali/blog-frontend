import { useState } from "react";
import { toast } from "react-toastify";

import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [categoty, setCategoty] = useState("");
  const [descripton, setDescripton] = useState("");
  const [file, setFile] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return toast.error("Post Title is required");
    if (categoty.trim() === "") return toast.error("Post Category is required");
    if (descripton.trim() === "")
      return toast.error("Post Descripton is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("categoty", categoty);
    formData.append("descripton", descripton);
    formData.append("image", file);

    console.log({ title, categoty, descripton, file });
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
          value={categoty}
          onChange={(e) => setCategoty(e.target.value)}
        >
          <option value="" disabled>
            Select A Categoty
          </option>
          <option value="music">Music </option>
          <option value="coffee">coffee </option>
        </select>
        <textarea
          value={descripton}
          onChange={(e) => setDescripton(e.target.value)}
          rows="7"
          className="create-post-textatea form-children"
          placeholder="Post Descripton"
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
