import React from "react";
import { Switch, Route } from "react-router-dom";
import mobileProvider from './providers/categoriesmobile-provider'
import homeProvider from "./providers/home-provider";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={homeProvider}/> />
        <Route exact path="/mobiles" component={mobileProvider} />
      </Switch>
  );
};

export default Routes;
