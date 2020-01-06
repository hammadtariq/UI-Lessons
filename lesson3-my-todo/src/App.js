import React, { Component } from "react";
import Todo from "./Todo/todo";
import './Todo/todo.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Todo />
      </div>
    );
  }
}

export default App;
