import React ,{Component}from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import "./App.css";
import Header from "./Header";
import LoginHeader from "./LoginHeader";
import Logodiv from "./Logodiv";
import Category from "./Category";
import Maindiv from "./Maindiv";
import Footer from "./Footer";
import Mobilediv from "./Mobilediv";
import Mybody from "./Body";
import Content from "./Content";
import Home from "./Home";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        
          {/* <Home/> */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path='/Header' component={Header} />
            <Route path='/Footer' component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
