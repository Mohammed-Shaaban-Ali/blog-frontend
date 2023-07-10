import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { postAction } from "../slices/postSlice.js";

// createComment
export function createComment(newComment) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.post("/api/comments", newComment, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(postAction.addCommentPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// updateComment
export function updateComment(commentId, comment) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/comments/${commentId}`,
        comment,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      disPatch(postAction.updateCommentPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// deleteComment
export function deleteComment(commentId) {
  return async (disPatch, getState) => {
    try {
      await request.delete(`/api/comments/${commentId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(postAction.deleteCommentPost(commentId));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
