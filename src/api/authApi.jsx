import axios from "./AuthAxios";
const { REACT_APP_API_URI } = process.env;

export const userLoginApi = async credentials => {
  try {
    const login = await axios.post(
      `${REACT_APP_API_URI}/api/auth/login`,
      credentials
    );
    console.log(login);

    return login.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCurrentUserApi = async () => {
  try {
    const resp = await axios.get(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    const currentUser = await resp.data;
    return currentUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const userLogout = async () => {
  try {
    const resp = await axios.get(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    const currentUser = await resp.data;
    return currentUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};
