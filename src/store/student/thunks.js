import axios from "axios";

import { api_url } from "../../config/constants";
import {
  addGroup,
  addStudent,
  getAttendances,
  getGroupDetails,
  getGroupNames,
  getGroups,
  getSpecificStudent,
  getStudents,
  getUsers,
} from "./slice";

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
    startingDate,
    bsn,
    groupId,
    contractSigned,
    extension,
    webCode,
    ref,
    status,
    imageUrl
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${api_url}/students/newStudent`, {
        firstName,
        initials,
        lastName,
        gender,
        dateOfBirth,
        startingDate,
        bsn,
        groupId,
        contractSigned,
        extension,
        webCode,
        ref,
        status,
        imageUrl,
      });

      console.log(response);
      dispatch(addStudent(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };

export const fetchClasses = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${api_url}/groups/all`);
    dispatch(getGroups(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchClassDetails = (groupId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `${api_url}/groups/groupDetails/${groupId}`
    );
    dispatch(getGroupDetails(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchAttendances = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${api_url}/attendances/all`);
    dispatch(getAttendances(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchUsers = async (dispatch, getState) => {
  try {
    const response = await axios.get(`${api_url}/users/all`);
    dispatch(getUsers(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const createGroup =
  (name, level, hours, startDate, teacherId, coTeacherId) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${api_url}/groups/addNew`, {
        name,
        level,
        hours,
        startDate,
        teacherId,
        coTeacherId,
      });
      console.log(response.data);
      dispatch(addGroup(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };

export const addAttendance =
  (
    firstName,
    lastName,
    date,
    startTime,
    endTime,
    totalHours,
    attended,
    authorizedAbsence,
    absenceReason
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${api_url}/attendances/addNew`, {
        firstName,
        lastName,
        date,
        startTime,
        endTime,
        totalHours,
        attended,
        authorizedAbsence,
        absenceReason,
      });
      console.log(response);

      // dispatch(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

export const editStudent =
  (
    firstName,
    initials,
    lastName,
    gender,
    dateOfBirth,
    startingDate,
    bsn,
    groupId,
    contractSigned,
    extension,
    webCode,
    ref,
    status,
    id
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${api_url}/students/edit`, {
        firstName,
        initials,
        lastName,
        gender,
        dateOfBirth,
        startingDate,
        bsn,
        groupId,
        contractSigned,
        extension,
        webCode,
        ref,
        status,
        id,
      });

      console.log("response", response);

      dispatch(getSpecificStudent(response.data));
    } catch (e) {
      console.log(e);
    }
  };

export const removeStudent = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(`${api_url}/students/delete/${id}`);
  } catch (e) {
    console.log(e);
  }
};
