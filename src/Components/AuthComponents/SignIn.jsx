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

//*userAction

const SignIn = props => {
  const useStyles = makeStyles({
    button: {
      width: "100%",
      border: 0,
      borderRadius: 3,

      color: "white",
      height: 48,
      padding: "0 30px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} rounded={16}>
        <Box p={5}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              style={{ marginBottom: "1em" }}
            />

            <TextField
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
              SIGN IN
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

export default SignIn;