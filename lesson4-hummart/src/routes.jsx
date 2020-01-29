import React from "react";
import { Switch, Route } from "react-router-dom";
import mobileProvider from './providers/categoriesmobile-provider'
import homeProvider from "./providers/home-provider";
import specificProvider from './providers/specific-provider'

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={homeProvider}/> />
        <Route exact path="/mobiles" component={mobileProvider} />
        <Route exact path="/mobiles/:id" component={specificProvider} />
      </Switch>
  );
};

export default Routes;
