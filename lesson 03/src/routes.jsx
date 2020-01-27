import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import sliderProvider from '../src/containers/Home'
import homeProvider from "./providers/homeProvider"
import {ROUTES} from "./utils/constants"
import { Slider } from "antd";
import mobileProvider from "./providers/mobileProvider"
import mobile from "./containers/Mobile"



const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={homeProvider} />
        <Route exact path={ROUTES.MOBILE} component={mobileProvider} />
      </Switch>
    </div>
  );
};

export default Routes;
