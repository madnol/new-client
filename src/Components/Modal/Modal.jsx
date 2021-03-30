import React from "react";
import { CloseRounded } from "@material-ui/icons";

import { IconButton, TextField, makeStyles, Button } from "@material-ui/core";
import "./Modal.css";

const useStyles = makeStyles(theme => ({
  overlay: {
    display: "flex",
    alignItems: "center",
    flexdIrection: "column",
    justifyContent: "center",
    position: "fixed",
    zIndex: 1,
    width: "100%",
    height: "100%",

    left: 0,
    top: 0,
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
}));

function Modal({ open, setOpen }) {
  const classes = useStyles();

  const closeModal = e => {
    setOpen(!open);
  };

  return (
    <div
      onClick={() => setOpen(!open)}
      className={classes.overlay}
      style={{ display: `${open ? "flex" : "none"}` }}
    >
      <div
        style={{
          width: "500px",
          height: "400px",

          backgroundColor: "white",
          borderRadius: "10px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton className="close" onClick={closeModal}>
          <CloseRounded />
        </IconButton>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            style={{ marginBottom: "1em" }}
            label="Room name"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "1em" }}
            label="guests"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            CREATE
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
