import { useState } from "react";
import "./UpdateProfile.css";
import { FaTimes } from "react-icons/fa"; // x

const user = {
  username: "mohammed ",
  nio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quas.",
};

const UpdateProfile = ({ setUpdateProfile }) => {
  const [username, setusername] = useState(user.username);
  const [bio, setbio] = useState(user.nio);
  const [password, setpassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const updateUser = { username, bio };
    if (password.trim() !== "") {
      updateUser.password = password;
    }
    // if (username.trim() === "")
    //   return toast.error("profile username is required");
    // if (bio.trim() === "") return toast.error("profile bio is required");

    console.log(updateUser);
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
