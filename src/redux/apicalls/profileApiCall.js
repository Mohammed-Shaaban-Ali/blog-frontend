import { profileAction } from "../slices/profileSlice.js";
import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { authAction } from "../slices/authSlice.js";

// get proflie
export function getUserProfile(id) {
  return async (disPatch) => {
    try {
      const { data } = await request.get(`/api/users/profile/${id}`);
      disPatch(profileAction.setProfile(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// update  proflie photo
export function uploadeProfiletphtot(photo) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.post(
        "/api/users/profile/profile-photo-upload",
        photo,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      disPatch(profileAction.setProfilePhoto(data.profilePhoto));
      disPatch(authAction.sertUserPhoto(data.profilePhoto));
      toast.success(data.message);

      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.profilePhoto = data?.profilePhoto;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// update  proflie info
export function updateProfile(id, profile) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.put(`/api/users/profile/${id}`, profile, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });

      disPatch(profileAction.updateProfile(data));
      disPatch(authAction.sertUserusername(data.username));

      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.username = data?.username;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
