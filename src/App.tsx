import React, { FC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ChoiceTest } from "./components/ChoiceTest/ChoiceTest";
import { Questions } from "./components/Questions/Questions";

import "./App.css";

export const App: FC = () => {
  return (
    <HashRouter basename="/">
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/choice" component={ChoiceTest} />
          <Route path="/question" component={Questions} />
        </Switch>
      </div>
    </HashRouter>
  );
};
