import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { passwordAction } from "../slices/posswordSlice.js";

// fogeotPassword
export function fogeotPassword(email) {
  return async (disPatch) => {
    try {
      const { data } = await request.post("/api/password/reset-password-link", {
        email,
      });
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  };
}
// getresetPassword
export function getresetPassword(userId, token) {
  return async (disPatch) => {
    try {
      await request.get(`/api/password/reset-password/${userId}/${token}`);
    } catch (error) {
      console.log(error);
      disPatch(passwordAction.setError());
    }
  };
}

// resetPassword
export function resetPassword(newPassword, user) {
  return async (disPatch) => {
    try {
      const { data } = await request.post(
        `/api/password/reset-password/${user.userId}/${user.token}`,
        { password: newPassword }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
