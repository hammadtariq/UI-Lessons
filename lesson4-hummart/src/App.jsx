import React, { Component } from "react";
import Routes from "./routes";

class App extends Component {
  render() {
    localStorage.setItem("redirect", '{"condition":false}');
    return (
      <div className="main">
        <Routes />
      </div>
    );
  }
}

export default App;
