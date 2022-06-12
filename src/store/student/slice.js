import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [], // GET /students (only include group)
  groups: [],
  studentDetails: null, // GET /students/:id -> includes everything
  groupDetails: null,
  attendances: null,
  users: null,
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
    getGroups: (state, action) => {
      state.groups = action.payload;
    },
    getGroupDetails: (state, action) => {
      state.groupDetails = action.payload;
    },
    getAttendances: (state, action) => {
      state.attendances = action.payload;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
  getStudents,
  getSpecificStudent,
  getGroupNames,
  getGroups,
  getGroupDetails,
  getAttendances,
  getUsers,
} = studentSlice.actions;

export default studentSlice.reducer;
