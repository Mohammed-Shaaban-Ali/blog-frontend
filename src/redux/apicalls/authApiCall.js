import { authAction } from "../slices/authSlice";
import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";

// Login
export function loginUser(user) {
  return async (disPatch) => {
    try {
      const { data } = await request.post("/api/auth/login", user);
      disPatch(authAction.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Logout
export function logoutUser() {
  return async (disPatch) => {
    disPatch(authAction.logout());
    localStorage.removeItem("userInfo");
  };
}

// register
export function registerUser(user) {
  return async (disPatch) => {
    try {
      const { data } = await request.post("/api/auth/register", user);
      disPatch(authAction.register(data.message));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// verify email
export function verifyEmail(userId, token) {
  return async (dispatch) => {
    try {
      await request.get(`/api/auth/${userId}/verify/${token}`);
      console.log("1");
      dispatch(authAction.setisEmailVerified());
      console.log("1");
    } catch (error) {
      console.log(error);
    }
  };
}
