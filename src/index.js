import React from "react";
import ReactDom from "react-dom";
import {Route, Router, browserHistory} from "react-router";
import "./styles/normalize.css";
import "./styles/style.css";
import "./vendors/font-awesome/css/font-awesome.css";
require('react-datepicker/dist/react-datepicker.css');


import Homepage from "./components/Homepage/Homepage";
import EventResult from "./components/EventResult/EventResult";

import "./favicon.ico";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/events" component={EventResult} />
  </Router>
  , document.getElementById("app")
);

