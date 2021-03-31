import React from "react";
import { Paper, Box, makeStyles, IconButton } from "@material-ui/core";

import {
  ScreenShareRounded,
  StopScreenShareRounded,
  VideocamRounded,
  VideocamOffRounded,
  MicRounded,
  MicOffRounded,
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  toolbar: {
    width: "500px",
    height: " 80px",
    borderRadius: "15px",
    position: "absolute",
    boxShadow:
      "0 0.8px 2.2px rgba(0, 0, 0, 0.02), 0 2px 5.3px rgba(0, 0, 0, 0.028), 0 3.8px 10px rgba(0, 0, 0, 0.035), 0 6.7px 17.9px rgba(0, 0, 0, 0.042),  0 12.5px 33.4px rgba(0, 0, 0, 0.05),  0 30px 80px rgba(0, 0, 0, 0.07)",

    opacity: "0.5",
    transition: "opacity .25s",
    bottom: 20,
    "&:hover": {
      opacity: "1",
    },
  },

  toolbar__box: {
    padding: 0,
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  toolbar__box__button: {
    cursor: "pointer",
    width: "3em",
    height: "3em",
  },
  toolbar__box__button__icon: {
    fontSize: "1.5em",
  },
}));

const Toolbar = ({ video, setVideo, audio, setAudio, screen, setScreen }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.toolbar}>
      <Box p={3} className={classes.toolbar__box}>
        <IconButton
          className={classes.toolbar__box__button}
          onClick={() => setVideo(!video)}
        >
          {video ? (
            <VideocamRounded className={classes.toolbar__box__button__icon} />
          ) : (
            <VideocamOffRounded
              className={classes.toolbar__box__button__icon}
            />
          )}
        </IconButton>

        <IconButton
          className={classes.toolbar__box__button}
          onClick={() => setAudio(!audio)}
        >
          {audio ? (
            <MicRounded className={classes.toolbar__box__button__icon} />
          ) : (
            <MicOffRounded className={classes.toolbar__box__button__icon} />
          )}
        </IconButton>
        <IconButton
          className={classes.toolbar__box__button}
          onClick={() => setScreen(!screen)}
        >
          {screen ? (
            <ScreenShareRounded
              className={classes.toolbar__box__button__icon}
            />
          ) : (
            <StopScreenShareRounded
              className={classes.toolbar__box__button__icon}
            />
          )}
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Toolbar;
