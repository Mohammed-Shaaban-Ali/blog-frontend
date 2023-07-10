import React, { useState } from "react";
import "./UpdateComment.css";
import { FaTimes } from "react-icons/fa"; // x
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/apicalls/commentApiCall";

const UpdateComment = ({ setUpdateComment, commentForupdate }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(commentForupdate?.text);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("comment is required");

    dispatch(updateComment(commentForupdate?._id, { text }));
    setUpdateComment(false);
  };
  return (
    <div className="update-comment">
      <form onSubmit={formSubmitHandler} className="update-comment-form">
        <abbr title="close">
          <FaTimes
            onClick={() => setUpdateComment(false)}
            className="update-comment-form-close"
          />
        </abbr>
        <h1 className="update-comment-title">Ediy comment </h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="update-comment-input"
        />

        <button type="submit" className="update-comment-btn">
          Update comment
        </button>
      </form>
    </div>
  );
};

export default UpdateComment;
