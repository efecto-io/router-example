import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Index from "./containers/Index";
import About from "./containers/About";
import User from "./containers/User";
import Page from "./containers/Page";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={User} />
      <Route path="/page/" component={Page} />
    </Router>
  );
}

export default AppRouter;
