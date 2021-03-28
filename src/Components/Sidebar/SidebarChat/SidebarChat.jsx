import React from "react";
import { Avatar, makeStyles, Button } from "@material-ui/core";
// import { v4 as uuidV4 } from "uuid";
import { useHistory } from "react-router-dom";
import "./SidebarChat.scss";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(3, 3),
  },
}));

const SidebarChat = props => {
  const classes = useStyles();

  let history = useHistory();

  const create = () => {
    // const id = uuidV4();
    console.log(props);
    history.push(`/hometest`);
  };

  return (
    <div className="sidebarChat">
      <Avatar className={classes.avatar} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
      <Button onClick={create}>Call</Button>
    </div>
  );
};

export default SidebarChat;
