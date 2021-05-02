import React from "react";
import { Route, Switch } from "react-router-dom";
import Principal from "../Principal";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Principal />
      </Route>
    </Switch>
  );
};

export default Routes;
