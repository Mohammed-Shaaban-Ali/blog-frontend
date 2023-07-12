import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    setComments(state, actions) {
      state.comments = actions.payload;
    },
    deleteComments(state, actions) {
      state.comments = state.comments.filter((c) => c._id !== actions.comments);
    },
  },
});

const commentsReducer = commentsSlice.reducer;
const commentsAction = commentsSlice.actions;
export { commentsAction, commentsReducer };
