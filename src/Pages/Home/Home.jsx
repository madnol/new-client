import React from "react";

import { Route, useRouteMatch } from "react-router-dom";
import { Grid } from "@material-ui/core";
//*Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarSetting from "../../Components/Sidebar/SidebarSettings/SidebarSetting";
import Room from "../../Components/Room/Room";
//*Styles

const Home = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Grid container className="Home">
      <Grid item xs={3}>
        <Route path={`${path}/`} render={props => <Sidebar props={props} />} />
        <Route
          path={`${path}/settings`}
          exact
          render={props => <SidebarSetting props={props} />}
        />
      </Grid>
      <Grid item xs={9}>
        <Route
          path={`${path}/room/:roomID`}
          render={props => <Room {...props} />}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
