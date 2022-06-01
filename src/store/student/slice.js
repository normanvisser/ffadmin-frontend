import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
};

export const studentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getStudents: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { getStudents } = studentSlice.actions;

export default studentSlice.reducer;
