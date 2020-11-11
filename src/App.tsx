import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { RedirectPage } from "./components/RedirectPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* Homepage */}
        <Route exact path='/' component={LandingPage} />
        {/* Any location that isn't recognized will be treated as a shortened URL */}
        <Route path='/:encoded' component={RedirectPage} />
      </Switch>
    </Router>
  );
}

export default App;
