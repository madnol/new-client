import React from "react";

// import SignUp from "../../Components/AuthComponents/SignUp";
import SignIn from "../../Components/AuthComponents/SignIn";
import SignUp from "../../Components/AuthComponents/SignUp";

import { Route, useRouteMatch } from "react-router-dom";
import { Grid } from "@material-ui/core";

// import theme from "../../theme";
const Auth = ({ props, setUser }) => {
  const { path } = useRouteMatch();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Grid item>
        <SignUp setUser={setUser} />
        <Route
          path={`${path}/login`}
          exact
          render={props => <SignIn props={props} setUser={setUser} />}
        />
      </Grid>
    </Grid>
  );
};

export default Auth;
