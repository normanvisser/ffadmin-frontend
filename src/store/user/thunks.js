import { api_url } from "../../config/constants";
import { userLoggedIn, userLoggedOut, loginAttempted } from "./slice";
const axios = require("axios");

export const loginUser = (email, password) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${api_url}/auth/login`, {
      email,
      password,
    });
    const jwt = response.data.jwt;
    console.log(response);
    localStorage.setItem("token", jwt);
    dispatch(userLoggedIn(jwt));
  } catch (e) {
    console.log(e);
  }
};

export const bootstrapLoginState = async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(loginAttempted());
      return;
    }
    dispatch(userLoggedIn(token));
    dispatch(loginAttempted());
    // const response = await axios.get(`${api_url}/auth/me`, { token });
  } catch (e) {
    console.log(e.message);
  }
};

export const logoutUser = async (dispatch, getState) => {
  try {
    localStorage.removeItem("token");
    dispatch(userLoggedOut);
  } catch (e) {
    console.log(e);
  }
};
