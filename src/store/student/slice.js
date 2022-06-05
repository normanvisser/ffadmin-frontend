import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [], // GET /students (only include group)
  groups: [],
  studentDetails: null, // GET /students/:id -> includes everything
  groupDetails: null,
};

export const studentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getStudents: (state, action) => {
      state.students = action.payload;
    },
    getSpecificStudent: (state, action) => {
      state.studentDetails = action.payload;
    },
    getGroupNames: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const { getStudents, getSpecificStudent, getGroupNames } =
  studentSlice.actions;

export default studentSlice.reducer;
