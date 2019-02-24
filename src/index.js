import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "./assets/scss/material-kit-pro-react.scss";
import ContactUsPage from "./views/ContactUsPage/ContactUsPage.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.jsx";
import HelpUsPage from "views/HelpUsPage/HelpUsPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/help-us" component={HelpUsPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
