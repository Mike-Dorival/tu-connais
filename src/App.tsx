import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ChoiceTest } from "./components/ChoiceTest/ChoiceTest";
import { Question } from "./components/Question/Question";

import "./App.css";

export const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/choice" component={ChoiceTest} />
          <Route path="/question" component={Question} />
        </Switch>
      </div>
    </Router>
  );
};
