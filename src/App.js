import React, { useState } from "react";

//*pages
import Home from "./Pages/Home/Home";

import Auth from "./Pages/Auth/Auth";

//*REACT-ROUTER
import { Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <Route
        path="/auth"
        render={props => <Auth props={props} setUser={setUser} />}
      />
      <Route path="/home" render={props => <Home {...props} user={user} />} />
    </>
  );
}

export default App;
