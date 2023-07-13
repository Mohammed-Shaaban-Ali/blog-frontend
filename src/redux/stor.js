import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { profileReducer } from "./slices/profileSlice";
import { postReducer } from "./slices/postSlice";
import { categoryReducer } from "./slices/categorySlice";
import { commentsReducer } from "./slices/commentSlice";
import { passwordReducer } from "./slices/posswordSlice";

const stor = configureStore({
  reducer: {
    auth: authReducer,
    profiles: profileReducer,
    posts: postReducer,
    categories: categoryReducer,
    comments: commentsReducer,
    passwords: passwordReducer,
  },
});

export default stor;
