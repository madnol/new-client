import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getAllGroups = async () => {
  try {
    const resp = await axios.get(`${REACT_APP_API_URI}/api/groups/`);
    const rooms = await resp.data;
    console.log(rooms);
    return rooms;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getSingleGroup = async roomId => {
  try {
    const resp = await axios.get(
      `${REACT_APP_API_URI}/api/groups/data/${roomId}`
    );
    const { data } = await resp;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createGroup = async users => {
  try {
    console.log(users);
    const rooms = await axios.post(`${REACT_APP_API_URI}/api/groups`, {
      users,
    });
    const newRoom = await rooms.data;
    console.log(newRoom);
    return newRoom;
  } catch (error) {
    console.log(err);
    return null;
  }
};

export const leaveGroup = async id => {
  try {
    const room = await axios.put(
      `${REACT_APP_API_URI}/api/groups/${id}/leaveroom`
    );
    console.log(room);
    const chatRoom = await room.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
