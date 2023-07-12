import { createSlice } from "@reduxjs/toolkit";

const peofileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    loading: false,
    isAccountDeleted: false,
    profileCount: null,
    allprofiles: [],
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setProfilePhoto(state, action) {
      state.profile.profilePhoto = action.payload;
    },
    updateProfile(state, action) {
      state.profile = action.payload;
    },
    setLoding(state) {
      state.loading = true;
    },
    clearLoding(state) {
      state.loading = false;
    },
    setisAccountDeleted(state) {
      state.isAccountDeleted = true;
    },
    clearisAccountDeleted(state) {
      state.isAccountDeleted = false;
      state.loading = false;
    },
    setprofileCount(state, action) {
      state.profileCount = action.payload;
    },
    setAllProfiles(state, action) {
      state.allprofiles = action.payload;
    },
  },
});

const profileReducer = peofileSlice.reducer;
const profileAction = peofileSlice.actions;
export { profileAction, profileReducer };
