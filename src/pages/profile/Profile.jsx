import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import PostItem from "../../components/posts/PostItem";
import "./Profile.css";
import UpdateProfile from "./UpdateProfile";
import swal from "sweetalert";
import { BsFillCameraFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  deleteProfile,
  getUserProfile,
  uploadeProfiletphtot,
} from "../../redux/apicalls/profileApiCall";
import { RotatingLines } from "react-loader-spinner";
import { logoutUser } from "../../redux/apicalls/authApiCall";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, loding, isAccountDeleted } = useSelector(
    (state) => state.profiles
  );
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  const [file, setfile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (isAccountDeleted) {
      navigate("/");
    }
  }, [isAccountDeleted, navigate]);

  const handesubmet = (e) => {
    e.preventDefault();
    if (!file) return toast.error("ther is not file");
    const formDate = new FormData();
    formDate.append("image", file);
    dispatch(uploadeProfiletphtot(formDate));
  };

  // Delete profile Handler
  const deletePostHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this profile!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProfile(id));
        dispatch(logoutUser());
      }
    });
  };

  return (
    <section className="profile">
      {loding ? (
        <div className="loding">
          <RotatingLines
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="profile-header">
            <div className="profile-image-wrapper">
              <img
                src={
                  file ? URL.createObjectURL(file) : profile?.profilePhoto.url
                }
                className="profile-image"
                alt="sh"
              />
              {user?._id === profile?._id && (
                <form onSubmit={handesubmet}>
                  <abbr title="Choosr photo profile">
                    <label
                      htmlFor="file"
                      className="uploade-profile-photo-icon"
                    >
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
              )}
            </div>
            <h1 className="profile-username">{profile?.username}</h1>
            <p className="profile-bio">{profile?.bio}</p>
            <div className="user-date-joined">
              <strong>Date Joined:</strong>
              <span> {new Date(profile?.createdAt).toDateString()}</span>
            </div>
            {user?._id === profile?._id && (
              <button
                onClick={() => setUpdateProfile(true)}
                className="profile-update-btn"
              >
                Update Profile
              </button>
            )}
          </div>
          <div className="profile-posts-list">
            <h2>{profile?.username}</h2>
            {profile?.posts?.map((post) => (
              <PostItem
                key={post._id}
                post={post}
                username={profile?.username}
                userId={profile?._id}
              />
            ))}
          </div>
          {user?._id === profile?._id && (
            <button
              onClick={() => deletePostHandler(profile?._id)}
              className="delet-accont"
            >
              Delete the account
            </button>
          )}
          {updateProfile && (
            <UpdateProfile
              profile={profile}
              setUpdateProfile={setUpdateProfile}
            />
          )}
        </>
      )}
    </section>
  );
};
export default Profile;
