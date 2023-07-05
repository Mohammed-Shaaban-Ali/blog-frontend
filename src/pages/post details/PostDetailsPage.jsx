import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import AddComment from "../../components/comment/AddComment";
import CommentList from "../../components/comment/CommentList";
import swal from "sweetalert";
import "./PostDetailsPage.css";

import { toast } from "react-toastify";
import { posts } from "../../dummyData";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import UpdatePostModel from "./UpdatePostModel";

const PostDetailsPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p._id === parseInt(id));

  const [file, setfile] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);

  const updateImage = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no file!");
    console.log("image update sccess");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Delete Post Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };
  return (
    <section className="post-derails">
      <div className="post-derails-image-weapper">
        <img
          src={file ? URL.createObjectURL(file) : post.image}
          alt={post.title}
          className="post-derails-image"
        />
        <form onSubmit={updateImage} className="update-post-image-form">
          <label htmlFor="file" className="update-post-label">
            <BsFillImageFill className="image-icon" /> Select New Image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
            onChange={(e) => setfile(e.target.files[0])}
          />
          <button type="submit">Uploade</button>
        </form>
      </div>
      <h1 className="post-derails-title">{post.title}</h1>
      <div className="post-derails-info">
        <img
          src={post.user.image}
          alt={post.user.image}
          className="post-derails-user-image"
        />
        <div className="post-details-user">
          <strong>
            <Link to="/profile/1">{post.user.username}</Link>
          </strong>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="post-derails-description">
        {post.description}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        dolore recusandae ut debitis repellendus autem excepturi, fugit,
        officia, quam placeat praesentium sed! Fugiat voluptas minus omnis quasi
        explicabo, repellat vero! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illo dolor id quaerat excepturi quos eum, accusantium
        veritatis amet, omnis expedita repellat magni numquam error eaque
        cupiditate. Veniam repudiandae non aspernatur!
      </p>
      <div className="post-derails-icon">
        <div>
          <AiOutlineLike className="post-derails-icon-like" />
          <small>{post.likes.length} Liles</small>
        </div>
        <div>
          <BiEdit
            onClick={() => setUpdatePost(true)}
            style={{ fill: "green", marginRight: "15px", cursor: "pointer" }}
          />
          <RiDeleteBin6Line
            onClick={deletePostHandler}
            style={{ fill: "red", cursor: "pointer" }}
          />
        </div>
      </div>
      <AddComment />
      <CommentList />
      {updatePost && (
        <UpdatePostModel post={post} setUpdatePost={setUpdatePost} />
      )}
    </section>
  );
};

export default PostDetailsPage;
