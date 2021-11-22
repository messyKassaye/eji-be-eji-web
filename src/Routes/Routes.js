import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";
import AuthenticatedRoute from "./AuthenticationRoute";
import PrivateRoute from "./PrivateRoute";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </Router>
  );
}
