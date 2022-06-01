import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import studentReducer from "./student/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    student: studentReducer,
  },
});

export default store;
