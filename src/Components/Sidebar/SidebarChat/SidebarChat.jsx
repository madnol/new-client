import React from "react";
import { Avatar, makeStyles, Button } from "@material-ui/core";
// import { v4 as uuidV4 } from "uuid";
import { useHistory } from "react-router-dom";
import "./SidebarChat.scss";
import RJ from "../../../Assets/images/richard.jpg";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(3, 3),
  },
  badge: {
    backgroundColor: "#54df59",
    width: "10px",
    height: "10px",
    position: "absolute",
    top: "27px",
    left: "54px",
    borderRadius: "50px",
  },
}));

const SidebarChat = props => {
  const classes = useStyles();

  let history = useHistory();

  const create = () => {
    // const id = uuidV4();
    console.log(props);
    history.push(`home/room/hometest`);
  };

  return (
    <div className="sidebarChat">
      <div style={{ position: "relative" }}>
        <Avatar src={RJ} className={classes.avatar} />
        <div className={classes.badge}></div>
      </div>
      <div className="sidebarChat__info">
        <h2>Richard</h2>
        <p>This is the last message</p>
      </div>
      <Button onClick={create}>Call</Button>
    </div>
  );
};

export default SidebarChat;
