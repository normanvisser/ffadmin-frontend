import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  profile: null,
  attemptedLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload;
      state.attemptedLogin = true;
    },
    userLoggedOut: (state, action) => {
      state.token = null;
      state.profile = null;
    },
    loginAttempted: (state) => {
      state.attemptedLogin = true;
    },
  },
});

export const {
  getStudents,
  getSpecificStudent,
  getGroupNames,
  getGroups,
  getGroupDetails,
  userLoggedIn,
  userLoggedOut,
  loginAttempted,
} = userSlice.actions;

export default userSlice.reducer;
