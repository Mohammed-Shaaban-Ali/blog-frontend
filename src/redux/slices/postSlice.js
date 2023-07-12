import { createSlice } from "@reduxjs/toolkit";

const peofileSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    postCount: null,
    postCate: [],
    lodding: false,
    isPostCreated: false,
    onePost: null,
    PostsCount: null,
  },
  reducers: {
    setpost(state, action) {
      state.post = action.payload;
    },
    setpostCount(state, action) {
      state.postCount = action.payload;
    },
    setpostCate(state, action) {
      state.postCate = action.payload;
    },
    setLoding(state) {
      state.lodding = true;
    },
    clearLodding(state) {
      state.lodding = false;
    },
    setisPostCreated(state) {
      state.isPostCreated = true;
      state.lodding = false;
    },
    clearisPostCreated(state) {
      state.isPostCreated = false;
    },
    setOnePost(state, action) {
      state.onePost = action.payload;
    },
    setLikes(state, action) {
      state.onePost.linkes = action.payload.linkes;
    },
    deletepost(state, action) {
      state.post = state.post.filter((p) => p._id !== action.payload);
    },
    addCommentPost(state, action) {
      state.onePost.comments.push(action.payload);
    },
    updateCommentPost(state, action) {
      state.onePost.comments = state.onePost.comments.map((com) =>
        com._id === action.payload._id ? action.payload : com
      );
    },
    deleteCommentPost(state, action) {
      const comment = state.onePost.comments.find(
        (c) => c._id === action.payload
      );
      const indx = state.onePost.comments.indexOf(comment);
      state.onePost.comments.splice(indx, 1);
    },
    setPostsCount(state, action) {
      state.PostsCount = action.payload;
    },
  },
});

const postReducer = peofileSlice.reducer;
const postAction = peofileSlice.actions;
export { postAction, postReducer };
