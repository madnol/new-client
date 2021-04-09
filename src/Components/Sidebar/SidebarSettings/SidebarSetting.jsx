import React from "react";

//*STYLES
import "../Sidebar.scss";

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
  EditRounded,
  ExpandMore,
  AddRounded,
  AddAPhotoRounded,
  SettingsRounded,
} from "@material-ui/icons";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

//*COMPONENTS
import SidebarChat from "../SidebarChat/SidebarChat";
import { Link } from "react-router-dom";

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

const SidebarSetting = props => {
  const classes = useStyles();

  return (
    <div style={{ width: "400px" }} className="sidebar">
      <div className="sidebar__header">
        <div style={{ position: "relative" }}>
          <Avatar
            src="https://source.unsplash.com/600x600/?man"
            className={classes.avatar}
          />
          <IconButton
            style={{
              width: "1.8em",
              height: "1.8em",
              backgroundColor: "#e0e0e0",
              opacity: "0.8",
              padding: "0.5em",
              position: "absolute",
              bottom: "10px",
              right: "-10px",
            }}
          >
            <AddAPhotoRounded style={{ color: "#1C1C1C", fontSize: "70%" }} />
          </IconButton>
        </div>
        <div>
          <h3>Name</h3>
        </div>
        <div className="sidebar__headerRight">
          <Link to="/home">
            <IconButton>
              <SettingsRounded />
            </IconButton>
          </Link>
          <IconButton>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <input placeholder="Change your name" type="text" />
        </div>
        <Button variant="contained" className={classes.button}>
          <EditRounded />
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

export default SidebarSetting;
