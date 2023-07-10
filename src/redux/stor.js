import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { profileReducer } from "./slices/profileSlice";
import { postReducer } from "./slices/postSlice";
import { categoryReducer } from "./slices/categorySlice";
import { commentsReducer } from "./slices/commentSlice";

const stor = configureStore({
  reducer: {
    auth: authReducer,
    profiles: profileReducer,
    posts: postReducer,
    categories: categoryReducer,
    comments: commentsReducer,
  },
});

export default stor;
