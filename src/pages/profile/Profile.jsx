import React, { useEffect, useState } from "react";
import "./Profile.css";
import PostList from "../../components/posts/PostList.js";
import { posts } from "../../dummyData";
import { BsFillCameraFill } from "react-icons/bs";
import im11 from "../../images/user-avatar.png";
import { toast } from "react-toastify";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const [file, setfile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handesubmet = (e) => {
    e.preventDefault();
    if (!file) return toast.error("ther is not file");
    console.log("image uploded");
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
            src={file ? URL.createObjectURL(file) : im11}
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
        <h1 className="profile-username">mohamed shaaban</h1>
        <p className="profile-bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quas.
        </p>
        <div className="user-date-joined">
          <strong>Date Joined:</strong>
          <span> fri nov 04 2022</span>
        </div>
        <button
          onClick={() => setUpdateProfile(true)}
          className="profile-update-btn"
        >
          Update Profile
        </button>
      </div>
      <div className="profile-posts-list">
        <h2>mohamed shaaban</h2>
        <PostList posts={posts} />
      </div>
      <button onClick={deletePostHandler} className="delet-accont">
        Delete the account
      </button>
      {updateProfile && <UpdateProfile setUpdateProfile={setUpdateProfile} />}
    </section>
  );
};
export default Profile;
