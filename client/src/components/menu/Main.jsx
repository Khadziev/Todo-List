import React from "react";

import Home from "../pages/Home";
import SignupPage from "../authorization/SignupPage";
import SigninPage from "../authorization/SigninPage";
import { Route, Switch } from "react-router-dom";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/registration">
          <SignupPage />
        </Route>
        <Route path="/login">
          <SigninPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
