import axios from "./AuthAxios";
const { REACT_APP_API_URI } = process.env;

export const userLoginApi = async credentials => {
  try {
    console.log(credentials);
    const login = await axios.post(
      `${REACT_APP_API_URI}/api/auth/login`,
      credentials,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
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
    // console.log(window.localStorage.getItem("accessToken"));
    const resp = await axios.get(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
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
