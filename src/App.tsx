import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { RedirectPage } from "./components/RedirectPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route component={RedirectPage} />
      </Switch>
    </Router>
  );
}

export default App;
