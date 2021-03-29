import React from "react";
import { Paper, Box, makeStyles } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
import {
  ScreenShareRounded,
  VideocamRounded,
  VideocamOffRounded,
  MicRounded,
  // MicOffRounded,
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  toolbar: {
    width: "500px",
    height: " 100px",
    borderRadius: "15px",
    position: "absolute",
    opacity: "0.5",
    transition: "opacity .25s",
    bottom: 20,
    "&:hover": {
      opacity: "1",
    },
  },

  toolbar__box: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  toolbar__box__icons: {
    cursor: "pointer",
    fontSize: "3em",
  },
}));

const Toolbar = () => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.toolbar}>
      <Box p={3} className={classes.toolbar__box}>
        {true ? (
          <VideocamRounded
            // onClick={muteUnmute}
            className={classes.toolbar__box__icons}
          />
        ) : (
          <VideocamOffRounded className={classes.toolbar__box__icons} />
        )}

        <MicRounded
          // onClick={stopStartVideo}
          className={classes.toolbar__box__icons}
        />
        <ScreenShareRounded className={classes.toolbar__box__icons} />
      </Box>
    </Paper>
  );
};

export default Toolbar;
