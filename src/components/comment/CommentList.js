import React from "react";
import "./CommentList.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import swal from "sweetalert";

const CommentList = () => {
  // Delete comment Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("comment has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };
  return (
    <div className="comment-list">
      <h4 className="comment-list-count">3 comments</h4>
      {[1, 2, 3].map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">Youssef Abbase</div>
            <div className="comment-item-time">2 hours ago</div>
          </div>
          <p className="comment-item-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="comment-item-icon-wrapper">
            <BiEdit
              style={{ fill: "green", marginRight: "15px", cursor: "pointer" }}
            />
            <RiDeleteBin6Line
              onClick={deletePostHandler}
              style={{ fill: "red", cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
