import React from "react";

//*pages
import Home from "./Pages/Home/Home";

//*REACT-ROUTER
import { Route } from "react-router-dom";

function App() {
  return <Route path="/" render={props => <Home {...props} />} />;
}

export default App;
