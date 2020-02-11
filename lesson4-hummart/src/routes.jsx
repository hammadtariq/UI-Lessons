import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import mobileProvider from "./providers/categoriesmobile-provider";
import homeProvider from "./providers/home-provider";
import specificProvider from "./providers/specific-provider";
import Blank from "./container/blank";
import adminProvider from "./providers/adminProvider";
import checkout from "./container/checkout";
import Login from "./container/login";
import storeProvider from "./providers/storeprovider";

const PrivateRoute = ({ component: Component }) => {
  debugger;
  let a = JSON.parse(localStorage.getItem("redirect"));
  return (
    <Route
      render={() => (a.condition ? <Component /> : <Redirect to={"/store"} />)}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path="/storedetail" component={storeProvider} />
      <Route exact path="/" component={homeProvider} />
      <Route exact path="/mobiles" component={mobileProvider} />
      <Route exact path="/mobiles/:id" component={specificProvider} />
      <Route exact path="/dashboard" component={adminProvider} />
      <Route path="/blank" component={Blank} />
      <Route path="/checkout" component={checkout} />
      <Route path="/store" component={Login} />
      {/* <Route path="/storedetail" component={storeProvider} /> */}
    </Switch>
  );
};

export default Routes;
