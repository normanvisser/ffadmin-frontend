import axios from "axios";
import { api_url } from "../../config/constants";
import { getGroupNames, getSpecificStudent, getStudents } from "./slice";

export const fetchStudents = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${api_url}/students/all`);
    const students = response.data;
    dispatch(getStudents(students));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSpecificStudent =
  (studentId) => async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${api_url}/students/specificStudent/${studentId}`
      );
      dispatch(getSpecificStudent(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchGroupNames = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${api_url}/groups/allNames`);
    dispatch(getGroupNames(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const createNewStudent =
  (
    firstName,
    initials,
    lastName,
    gender,
    dateOfBirth,
    bsn,
    ref,
    startingDate,
    contractSigned,
    webCode,
    extension,
    status
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${api_url}/students/newStudent`, {
        firstName,
        initials,
        lastName,
        gender,
        dateOfBirth,
        bsn,
        ref,
        startingDate,
        contractSigned,
        webCode,
        extension,
        status,
      });
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
