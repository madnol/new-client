import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Paper,
  Box,
} from "@material-ui/core";
import { AiOutlineGoogle } from "react-icons/ai";
import { userLoginApi, getCurrentUserApi } from "../../api/authApi";
// import { useHistory, link } from "react-router-dom";
//*userAction

const SignIn = ({ props, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const useStyles = makeStyles({
    paper: {
      width: "400px",
      borderRadius: "15px",
    },

    textField: {
      width: "100%",
      marginBottom: "1em",
    },
    button: {
      width: "100%",
      border: 0,
      borderRadius: 3,
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  });

  useEffect(() => {
    userLoginApi();
  }, []);

  const classes = useStyles();

  const handleLogin = async () => {
    const credentials = {
      username,
      password,
    };

    const login = await userLoginApi(credentials);
    if (login) {
      const userApi = await getCurrentUserApi();
      console.log(userApi);
      setUser(userApi);
    }
    // setUser(login);
  };

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
            <form style={{ width: "100%" }}>
              <TextField
                label="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                variant="outlined"
                size="small"
                className={classes.textField}
              />

              <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Password"
                type="password"
                size="small"
                autoComplete="current-password"
                variant="outlined"
                className={classes.textField}
                style={{ marginBottom: "2em" }}
              />
              <Button
                className={classes.button}
                size="large"
                variant="contained"
                color="primary"
                style={{ marginBottom: "1em" }}
                onClick={handleLogin}
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
            </form>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default SignIn;
