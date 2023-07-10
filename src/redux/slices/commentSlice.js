import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {},
});

const commentsReducer = commentsSlice.reducer;
const commentsAction = commentsSlice.actions;
export { commentsAction, commentsReducer };
