import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

//*STYLES
import "./Sidebar.scss";

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
  const avatarRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    gsap.from(avatarRef.current, {
      duration: 1,
      x: "-100vw",
    });
    gsap.from(searchRef.current, {
      duration: 1,
      x: "-100vw",
      delay: 0.3,
    });
  }, []);

  const classes = useStyles();
  const History = useHistory();
  const handleSettings = e => {
    e.preventDefault();
    History.push("/settings");
  };

  return (
    <div style={{ width: "400px" }} className="sidebar">
      <div className="sidebar__header">
        <div style={{ position: "relative" }}>
          <Avatar
            ref={avatarRef}
            src="https://source.unsplash.com/600x600/?man"
            className={classes.avatar}
          />
        </div>
        <div>
          <h3>Name</h3>
        </div>
        <div className="sidebar__headerRight">
          <IconButton onClick={handleSettings}>
            <SettingsRounded />
          </IconButton>

          <IconButton>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div ref={searchRef} className="sidebar__search">
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
              <IconButton className={classes.createRoom}>
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
    </div>
  );
};

export default Sidebar;
