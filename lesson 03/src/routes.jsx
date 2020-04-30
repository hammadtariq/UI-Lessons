import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import homeProvider from "./providers/homeProvider";
import { ROUTES } from "./utils/constants";
import mobileProvider from "./providers/mobileProvider";
import descriptionProvider from "./providers/descriptionProvider";
import DashboardProvider from "./providers/DashboardProvider";
import LoginProvider from "./providers/LoginProvider";
import StoreProvider from "./providers/StoreProvider";
import SatirProvider from "./providers/SatirProvider";



import mobile from "./containers/Mobile";
const PrivateRoute = ({ component: Component }) => {
  debugger;
  let myLoginStatus = JSON.parse(localStorage.getItem("myLoginState"));
  // localStorage.setItem("myLoginState", "false");

  return (
    <Route
      render={() =>
        myLoginStatus ? <Component /> : <Redirect to={"/Login"} />
      }
    />
  );
  myLoginStatus = false;
};

const Routes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute path={ROUTES.Dashboard} component={DashboardProvider} />
        <PrivateRoute path={ROUTES.Store} component={StoreProvider} />

        <Route exact path={"/"} component={homeProvider} />
        <Route exact path={ROUTES.MOBILE} component={mobileProvider} />
        <Route exact path={ROUTES.Login} component={LoginProvider} />
        <Route exact path={ROUTES.satir} component={SatirProvider} />

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
