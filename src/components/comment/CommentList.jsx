import React, { useState } from "react";
import "./CommentList.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import swal from "sweetalert";
import UpdateComment from "./UpdateComment";
import Moment from "react-moment";
import { deleteComment } from "../../redux/apicalls/commentApiCall";
import { useDispatch } from "react-redux";

const CommentList = ({ comments, user }) => {
  const dispatch = useDispatch();
  const [updateComment, setUpdateComment] = useState(false);
  const [commentForupdate, setCommentForupdate] = useState(null);

  const updateCommentHandel = (comment) => {
    setCommentForupdate(comment);
    setUpdateComment(true);
  };
  // Delete comment Handler
  const deleteCommentHandler = (commentId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deleteComment(commentId));
      }
    });
  };
  return (
    <div className="comment-list">
      <h4 className="comment-list-count">{comments?.length} comments</h4>
      {comments?.map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">{comment?.username}</div>
            <div className="comment-item-time">
              <Moment fromNow ago>
                {comment?.createdAt}
              </Moment>{" "}
              ago
            </div>
          </div>
          <p className="comment-item-text">{comment?.text}</p>
          <div className="comment-item-icon-wrapper">
            {user?._id === comments?.user && (
              <>
                <BiEdit
                  onClick={() => updateCommentHandel(comment)}
                  style={{
                    fill: "green",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                />
                <RiDeleteBin6Line
                  onClick={() => deleteCommentHandler(comment?._id)}
                  style={{ fill: "red", cursor: "pointer" }}
                />
              </>
            )}
          </div>
        </div>
      ))}
      {updateComment && (
        <UpdateComment
          commentForupdate={commentForupdate}
          setUpdateComment={setUpdateComment}
        />
      )}
    </div>
  );
};

export default CommentList;
