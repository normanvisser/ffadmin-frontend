import axios from "axios";
import { api_url } from "../../config/constants";
import { getStudents } from "./slice";

export const fetchStudents = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${api_url}/students/all`);
    const students = response.data;
    dispatch(getStudents(students));
  } catch (error) {
    console.log(error.message);
  }
};
