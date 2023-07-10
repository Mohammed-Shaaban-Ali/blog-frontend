import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import "./AddComment.css";
import { createComment } from "../../redux/apicalls/commentApiCall";

const AddComment = ({ postId }) => {
  const dispatch = useDispatch();

  const [text, setComment] = useState("");
  const addComment = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("please write comment");
    dispatch(createComment({ text, postId }));
    setComment("");
  };

  return (
    <form onSubmit={addComment} className="add-comment">
      <input
        type="text"
        placeholder="Add Comment"
        className="add-comment-input"
        value={text}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="add-comment-btn">
        Comment
      </button>
    </form>
  );
};

export default AddComment;
