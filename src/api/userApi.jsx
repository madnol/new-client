import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const registerUser = async credentials => {
  try {
    console.log(credentials);

    const user = await axios.post(
      `${REACT_APP_API_URI}/api/users/register`,
      credentials,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    console.log(user.data);
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const AllUsers = async () => {
  try {
    const users = await axios.get(`${REACT_APP_API_URI}/api/users`, {
      withCredentials: true,
    });
    return users.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const singleUser = async username => {
  try {
    const user = await axios.get(`${REACT_APP_API_URI}/api/users/${username}`, {
      withCredentials: true,
    });
    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const searchUser = async query => {
  try {
    const user = await axios.get(
      `${REACT_APP_API_URI}/api/users/search?q=${query}`,
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const addContact = async contactId => {
  try {
    const contact = await axios.post(
      `${REACT_APP_API_URI}/api/users/addContact/${contactId}`,
      {
        withCredentials: true,
      }
    );
    return contact.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const removeContact = async contactId => {
  try {
    const contact = await axios.put(
      `${REACT_APP_API_URI}/api/users/removeContact/${contactId}`,
      {
        withCredentials: true,
      }
    );
    return contact.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const editProfile = async data => {
  try {
    const user = await axios.put(`${REACT_APP_API_URI}/api/users/me`, data, {
      withCredentials: true,
    });
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteProfile = async () => {
  try {
    const user = await axios.delete(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const uploadProfilePicture = async file => {
  try {
    const user = await axios.post(
      `${REACT_APP_API_URI}/api/users/upload`,
      file,
      {
        withCredentials: true,
      }
    );
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
