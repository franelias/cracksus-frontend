import React from "react";
import { Route, Switch } from "react-router-dom";
import Principal from "../Principal";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Principal} />
    </Switch>
  );
};

export default Routes;
