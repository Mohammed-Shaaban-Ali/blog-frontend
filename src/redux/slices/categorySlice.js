import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload;
    },
  },
});

const categoryReducer = categorySlice.reducer;
const categoryAction = categorySlice.actions;
export { categoryAction, categoryReducer };
