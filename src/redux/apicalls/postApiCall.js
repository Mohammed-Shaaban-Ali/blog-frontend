import request from "../../pages/utils/request.js";
import { toast } from "react-toastify";
import { postAction } from "../slices/postSlice.js";

// get All post
export function getAllPosts() {
  return async (disPatch) => {
    try {
      const { data } = await request.get(`/api/posts`);
      disPatch(postAction.setpost(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}
// fatech post for page number
export function fatechPosts(pageNumber) {
  return async (disPatch) => {
    try {
      const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`);

      disPatch(postAction.setpost(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// get posts count
export function fatechPostsCount() {
  return async (disPatch) => {
    try {
      const { data } = await request.get(`/api/posts/count`);

      disPatch(postAction.setpostCount(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// fatech post for category
export function fatechPostscategory(category) {
  return async (disPatch) => {
    try {
      const { data } = await request.get(`/api/posts?category=${category}`);
      disPatch(postAction.setpostCate(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// create post
export function creatPost(newpost) {
  return async (disPatch, getState) => {
    try {
      disPatch(postAction.setLoding());
      await request.post("/api/posts", newpost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      disPatch(postAction.setisPostCreated());
      setTimeout(() => disPatch(postAction.clearisPostCreated()), 3000);
    } catch (error) {
      disPatch(postAction.clearLodding());
      toast.error(error?.response?.data?.message);
    }
  };
}

// fatech one post
export function fatechSinglePost(postid) {
  return async (disPatch) => {
    try {
      const { data } = await request.get(`/api/posts/${postid}`);
      disPatch(postAction.setOnePost(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// like post
export function handellikePost(postid) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/posts/like/${postid}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      disPatch(postAction.setLikes(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}
// update post image
export function updatepostImage(newImage, postId) {
  return async (disPatch, getState) => {
    try {
      await request.put(`/api/posts/upload-image/${postId}`, newImage, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "mult/form-data",
        },
      });
      toast.success("New post image was successfully updated");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// update post
export function updatepost(newpost, postId) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.put(`/api/posts/${postId}`, newpost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(postAction.setOnePost(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}
// delete post
export function deletepost(postId) {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.delete(`/api/posts/${postId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(postAction.deletepost(data.postId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}

// setPostsCount
export function getPostsCount() {
  return async (disPatch, getState) => {
    try {
      const { data } = await request.get(`/api/posts/count`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      disPatch(postAction.setPostsCount(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
}
