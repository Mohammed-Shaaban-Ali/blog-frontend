import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="post-item-image-wrapper">
        <img src={post.image} alt={post.image} className="post-item-image" />
      </div>

      <div className="post-item-info-wrapper">
        <div className="post-item-info">
          <div className="post-item-author">
            <strong>Author: </strong>
            <Link className="post-item-username" to="/profile/1">
              {post.user.username}
            </Link>
          </div>
          <div className="post-item-date">{post.createdAt.toString()}</div>
        </div>
        <div className="post-item-details">
          <h4 className="post-item-title">{post.title}</h4>
          <Link
            className="post-item-categories"
            to={`/posts/categories/${post.category}`}
          >
            {post.category}
          </Link>
        </div>
        <p className="post-item-description">
          {post.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia dolorum vitae unde, a itaque temporibus numquam
          distinctio fugiat reiciendis esse obcaecati fugit at, ipsam maxime
          expedita dignissimos quia? Incidunt, distinctio! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Vel corporis, assumenda
          quaerat, nihil dolore, fuga recusandae tempora maiores quod dolores
          eveniet laborum rem. Nemo, ducimus pariatur quod ratione praesentium
          omnis.
        </p>
        <Link className="post-item-link" to={`/posts/details/${post._id}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
