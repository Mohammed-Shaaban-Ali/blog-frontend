import { useState } from "react";
import { useDispatch } from "react-redux";

import "./UpdateProfile.css";
import { FaTimes } from "react-icons/fa"; // x
import { updateProfile } from "../../redux/apicalls/profileApiCall";

const UpdateProfile = ({ setUpdateProfile, profile }) => {
  const dispatch = useDispatch();

  const [username, setusername] = useState(profile?.username);
  const [bio, setbio] = useState(profile?.bio || "");
  const [password, setpassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const updateUser = { username, bio };
    if (password.trim() !== "") {
      updateUser.password = password;
    }

    dispatch(updateProfile(profile?._id, updateUser));
    setUpdateProfile(false);
  };
  return (
    <div className="update-profile">
      <form onSubmit={formSubmitHandler} className="update-profile-form">
        <abbr title="close">
          <FaTimes
            onClick={() => setUpdateProfile(false)}
            className="update-profile-form-close"
          />
        </abbr>
        <h1 className="update-profile-title">Update profile </h1>
        <input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          type="text"
          className="update-profile-input"
          placeholder="UserName"
        />
        <input
          value={bio}
          onChange={(e) => setbio(e.target.value)}
          type="text"
          className="update-profile-input"
          placeholder="Bio"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          className="update-profile-input"
          placeholder="password"
        />

        <button type="submit" className="update-profile-btn">
          Update profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
