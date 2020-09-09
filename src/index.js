import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Hacktober from "views/Hacktober/Hacktober.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path='/' exact={true} component={Hacktober} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
