import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import "./Profile.css";
import PostList from "../../components/posts/PostList.js";
import UpdateProfile from "./UpdateProfile";
import swal from "sweetalert";
import { posts } from "../../dummyData";
import { BsFillCameraFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  getUserProfile,
  uploadeProfiletphtot,
} from "../../redux/apicalls/profileApiCall";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profiles);
  const { id } = useParams();

  const [file, setfile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(id));
    window.scrollTo(0, 0);
  }, [id]);

  const handesubmet = (e) => {
    e.preventDefault();
    if (!file) return toast.error("ther is not file");
    const formDate = new FormData();
    formDate.append("image", file);
    dispatch(uploadeProfiletphtot(formDate));
  };

  // Delete profile Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this profile!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("profile has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url}
            className="profile-image"
            alt="sh"
          />
          <form onSubmit={handesubmet}>
            <abbr title="Choosr photo profile">
              <label htmlFor="file" className="uploade-profile-photo-icon">
                <BsFillCameraFill />
              </label>
            </abbr>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name="file"
              onChange={(e) => setfile(e.target.files[0])}
            />
            <button type="submit" className="uploade-profile-photo-btn">
              upload
            </button>
          </form>
        </div>
        <h1 className="profile-username">{profile?.username}</h1>
        <p className="profile-bio">{profile?.bio}</p>
        <div className="user-date-joined">
          <strong>Date Joined:</strong>
          <span> {new Date(profile?.createdAt).toDateString()}</span>
        </div>
        <button
          onClick={() => setUpdateProfile(true)}
          className="profile-update-btn"
        >
          Update Profile
        </button>
      </div>
      <div className="profile-posts-list">
        <h2>{profile?.username}</h2>
        <PostList posts={posts} />
      </div>
      <button onClick={deletePostHandler} className="delet-accont">
        Delete the account
      </button>
      {updateProfile && (
        <UpdateProfile profile={profile} setUpdateProfile={setUpdateProfile} />
      )}
    </section>
  );
};
export default Profile;
