import React from "react";
import { Link } from "react-router-dom";

import "./post.css";
import { Fade } from "react-reveal";

const PostItem = ({ post, username, userId }) => {
  const ProfileLink = userId
    ? `/profile/${userId}`
    : `/posts/categories/${post?.category}`;

  return (
    <Fade bottom duration={500} delay={200}>
      <div className="post-item">
        <div className="post-item-image-wrapper">
          <img
            src={post?.image.url}
            alt={post?.image.url}
            className="post-item-image"
          />
        </div>
        <div className="post-item-info-wrapper">
          <div className="post-item-info">
            <div className="post-item-author">
              <strong>Author: </strong>
              <Link className="post-item-username" to={ProfileLink}>
                {username ? username : post?.user?.username}
              </Link>
            </div>
            <div className="post-item-date">
              {new Date(post?.createdAt).toDateString}
            </div>
          </div>
          <div className="post-item-details">
            <h4 className="post-item-title">{post?.titel}</h4>
            <Link
              className="post-item-categories"
              to={`/posts/categories/${post?.category}`}
            >
              {post?.category}
            </Link>
          </div>
          <p className="post-item-description">{post?.descrption}</p>
          <Link className="post-item-link" to={`/posts/details/${post?._id}`}>
            Read More...
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default PostItem;
