import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Paper,
  Box,
} from "@material-ui/core";
import { AiOutlineGoogle } from "react-icons/ai";

import { registerUser } from "../../api/userApi";

const SignUp = ({ setUser }) => {
  // const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleRegister = async () => {
    const credentials = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    };

    const registration = await registerUser(credentials);

    setUser(registration);
    history.push("/home");
  };

  const useStyles = makeStyles({
    paper: {
      width: "400px",
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
            <form style={{ width: "100%" }}>
              <TextField
                value={name}
                onChange={e => setName(e.target.value)}
                className={classes.textField}
                label="Name"
                variant="outlined"
                size="small"
              />
              <TextField
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                className={classes.textField}
                label="Surname"
                variant="outlined"
                size="small"
              />
              <TextField
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={classes.textField}
                label="Username"
                variant="outlined"
                size="small"
              />
              <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={classes.textField}
                label="Email"
                type="Email"
                size="small"
                variant="outlined"
              />
              <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                onClick={handleRegister}
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
            </form>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default SignUp;
