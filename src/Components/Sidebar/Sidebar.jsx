import React, { useState } from "react";
import Modal from "../Modal/Modal";
//*STYLES
import "./Sidebar.scss";

import { motion } from "framer-motion";

//*MATERIAL UI
import {
  Avatar,
  IconButton,
  AccordionSummary,
  Accordion,
  Typography,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import {
  SearchOutlined,
  ExpandMore,
  Person,
  AddRounded,
  SettingsRounded,
} from "@material-ui/icons";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

//*COMPONENTS
import SidebarChat from "./SidebarChat/SidebarChat";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "100px",
    height: "100px",
    margin: theme.spacing(1, 0),
  },
  button: {
    padding: theme.spacing(1.8, 0),
    margin: theme.spacing(1, 1, 1, 2),
  },
  createRoom: {
    margin: "0 0 0 1em",
  },
}));

const Sidebar = props => {
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const classes = useStyles();
  const History = useHistory();
  const handleSettings = e => {
    e.preventDefault();
    History.push("/home/settings");
  };

  return (
    <motion.div
      // style={
      //     sidebar
      //       ? {
      //           width: "380px",
      //           height: "100vh",
      //           transform: "translateX(0)",
      //           transition: "transform 1s",
      //         }
      //       : {
      //           transform: "translateX(-280px)",
      //           transition: "transform 1s",
      //         }
      // }
      className="sidebar"
    >
      <Modal open={open} setOpen={setOpen} />
      <div className="sidebar__header">
        <div style={{ position: "relative" }}>
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGe_RVJMxNHjA/profile-displayphoto-shrink_400_400/0/1616322657311?e=1622678400&v=beta&t=aWsQx1KcQiT2NsSvUye8myaQIOSz8o6bMGJCnTOw87w"
            className={classes.avatar}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1em",
          }}
        >
          <h3>Manuel </h3>
        </div>
        <div className="sidebar__headerRight">
          <IconButton onClick={handleSettings}>
            <SettingsRounded />
          </IconButton>

          <IconButton
            onClick={() => setSidebar(!sidebar)}
            style={
              !sidebar
                ? {
                    transform: "rotate(180deg)",

                    transition: "transform 1s",
                  }
                : { transition: "transform 1s" }
            }
          >
            <ChevronLeftRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
        <Button variant="contained" className={classes.button}>
          <Person />
        </Button>
      </div>

      <div className="sidebar__chats">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Contacts</Typography>
          </AccordionSummary>
          <SidebarChat routeProps={props} />
          <SidebarChat />
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Groups</Typography>
          </AccordionSummary>
          <Grid container>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
              <IconButton
                onClick={() => setOpen(!open)}
                className={classes.createRoom}
              >
                <AddRounded />
              </IconButton>
            </Grid>
          </Grid>
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </Accordion>
      </div>
    </motion.div>
  );
};

export default Sidebar;
