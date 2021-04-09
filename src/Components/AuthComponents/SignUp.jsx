import React from "react";

import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Paper,
  Box,
} from "@material-ui/core";
import { AiOutlineGoogle } from "react-icons/ai";

// import { useHistory, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

//*userAction
// import { registerUserAction } from "../../Actions/userActions";

const SignUp = () => {
  // const fullname = useRef();
  // const email = useRef();
  // const username = useRef();
  // const password = useRef();

  const useStyles = makeStyles({
    paper: {
      borderRadius: "15px",
    },

    button: {
      width: "100%",
      border: 0,
      borderRadius: 3,

      color: "white",
      height: 48,
      padding: "0 30px",
    },
    textField: {
      width: "100%",
      marginBottom: "1em",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} rounded={16} className={classes.paper}>
        <Box p={5}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <TextField
              className={classes.textField}
              label="Name"
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.textField}
              label="Surname"
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.textField}
              label="Username"
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.textField}
              label="Email"
              type="Email"
              size="small"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              label="Password"
              type="password"
              size="small"
              autoComplete="current-password"
              variant="outlined"
              style={{ marginBottom: "2em" }}
            />
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
              style={{ marginBottom: "1em" }}
            >
              SIGN UP
            </Button>

            <Button
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
            >
              <AiOutlineGoogle
                style={{ fontSize: "1.5em", marginRight: "1em" }}
              />
              SIGN UP WITH GOOGLE
            </Button>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default SignUp;
