import React from "react";
import { Switch, Route } from "react-router-dom";
import Mobiles from './container/categoriesmobiles'
import homeProvider from "./providers/home-provider";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={homeProvider}/> />
        <Route exact path="/mobiles" component={Mobiles} />
      </Switch>
  );
};

export default Routes;
