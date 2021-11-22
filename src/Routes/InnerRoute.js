import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../components/content/Main";

export default function InnerRoute() {
  return (
    <Switch>
      <Route path={"/"} component={Main} exact />
    </Switch>
  );
}
