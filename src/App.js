import React from "react";

//*pages
import Home from "./Pages/Home/Home";

import Auth from "./Pages/Auth/Auth";

//*REACT-ROUTER
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/auth" render={props => <Auth props={props} />} />
      <Route path="/home" render={props => <Home {...props} />} />
    </>
  );
}

export default App;
