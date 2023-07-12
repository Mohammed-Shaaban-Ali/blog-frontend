import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { postAction } from "../slices/postSlice.js";
import { commentsAction } from "../slices/commentSlice.js";

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
      const { data } = await request.delete(`/api/comments/${commentId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(commentsAction.deleteComments(commentId));
      disPatch(postAction.deleteCommentPost(commentId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// get all comments
export function getAllcomments() {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.get(`/api/comments`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(commentsAction.setComments(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
