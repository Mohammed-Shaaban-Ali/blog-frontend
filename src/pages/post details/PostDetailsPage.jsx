import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddComment from "../../components/comment/AddComment";
import CommentList from "../../components/comment/CommentList";
import swal from "sweetalert";
import "./PostDetailsPage.css";

import { toast } from "react-toastify";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import UpdatePostModel from "./UpdatePostModel";
import {
  deletepost,
  fatechSinglePost,
  handellikePost,
  updatepostImage,
} from "../../redux/apicalls/postApiCall";

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const navgiate = useNavigate();
  const { id } = useParams();
  const { onePost } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const [file, setfile] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);

  const updateImage = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no file!");
    const formDate = new FormData();
    formDate.append("image", file);
    dispatch(updatepostImage(formDate, id));
  };

  useEffect(() => {
    dispatch(fatechSinglePost(id));
    window.scrollTo(0, 0);
  }, [id]);

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
        dispatch(deletepost(onePost?._id));

        navgiate("/");
      } else {
        swal("Something went wrong!");
      }
    });
  };

  return (
    <section className="post-derails">
      <div className="post-derails-image-weapper">
        <img
          src={file ? URL.createObjectURL(file) : onePost?.image?.url}
          alt={onePost?.title}
          className="post-derails-image"
        />
        {user?._id === onePost?.user?._id && (
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
        )}
      </div>
      <h1 className="post-derails-title">{onePost?.titel}</h1>
      <div className="post-derails-info">
        <img
          src={onePost?.user.profilePhoto.url}
          alt={onePost?.user.profilePhoto}
          className="post-derails-user-image"
        />
        <div className="post-details-user">
          <strong>
            <Link to={`/profile/${onePost?.user?._id}`}>
              {onePost?.user?.username}
            </Link>
          </strong>
          <span>{new Date(onePost?.createdAt).toDateString()}</span>
        </div>
      </div>
      <p className="post-derails-description">{onePost?.descrption}</p>
      <div className="post-derails-icon">
        <div>
          {user && (
            <>
              {onePost?.linkes.includes(user._id) ? (
                <AiFillLike
                  onClick={() => dispatch(handellikePost(onePost?._id))}
                  className="post-derails-icon-like"
                />
              ) : (
                <AiOutlineLike
                  onClick={() => dispatch(handellikePost(onePost?._id))}
                  className="post-derails-icon-like"
                />
              )}
            </>
          )}
          <small>{onePost?.linkes?.length} likes</small>
        </div>
        {user?._id === onePost?.user?._id && (
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
        )}
      </div>
      {user ? (
        <AddComment postId={onePost?._id} />
      ) : (
        <p style={{ fontSize: "16px", color: "gray" }}>
          to write a comment lohin first
        </p>
      )}

      <CommentList comments={onePost?.comments} />
      {updatePost && (
        <UpdatePostModel
          user={user}
          post={onePost}
          setUpdatePost={setUpdatePost}
        />
      )}
    </section>
  );
};

export default PostDetailsPage;
