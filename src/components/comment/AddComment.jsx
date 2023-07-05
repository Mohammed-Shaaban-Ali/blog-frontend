import { useState } from "react";
import { toast } from "react-toastify";

import "./AddComment.css";
const AddComment = () => {
  const [comment, setComment] = useState("");
  const addComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return toast.error("please write comment");
    console.log({ comment });
    setComment("");
  };

  return (
    <form onSubmit={addComment} className="add-comment">
      <input
        type="text"
        placeholder="Add Comment"
        className="add-comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="add-comment-btn">
        Comment
      </button>
    </form>
  );
};

export default AddComment;
