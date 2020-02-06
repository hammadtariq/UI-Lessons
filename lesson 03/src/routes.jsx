import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import sliderProvider from '../src/containers/Home'
import homeProvider from "./providers/homeProvider";
import { ROUTES } from "./utils/constants";
import { Slider } from "antd";
import mobileProvider from "./providers/mobileProvider";
import descriptionProvider from "./providers/descriptionProvider";
import DashboardProvider from "./providers/DashboardProvider";


import mobile from "./containers/Mobile";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={homeProvider} />
        <Route exact path={ROUTES.MOBILE} component={mobileProvider} />
        <Route exact path={ROUTES.Dashboard} component={DashboardProvider} />

        <Route
          exact
          path={ROUTES.Discription}
          component={descriptionProvider}
        />
      </Switch>
    </div>
  );
};

export default Routes;
