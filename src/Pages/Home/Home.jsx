import React, { Component } from "react";

import { Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
//*Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarSetting from "../../Components/Sidebar/SidebarSettings/SidebarSetting";
import Room from "../../Components/Room/Room";
//*Styles

class Home extends Component {
  render() {
    return (
      <Grid container className="Home">
        <Grid item xs={3}>
          <Route path="/" render={props => <Sidebar props={props} />} />
          <Route
            path="/settings"
            render={props => <SidebarSetting props={props} />}
          />
        </Grid>
        <Grid item xs={9}>
          <Route path="/room/:roomID" exact component={Room} />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
