import React, { Component } from "react";
import "./todo.css";


class Todo extends Component {
  state = {
    val: "",
    val2: "",
    list: ["Arsalan", "Nasir", "Shahan", "Abc", "CDe"],
    showText: false
  };
  func = e => {
    this.setState({ val2: e.target.value });
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let value = this.state.val;
    if (this.state.val !== "") {
      let list = [...this.state.list, value];
      this.setState({ list, val: "" });
    }
  };

  delete = id => {
    const list = [...this.state.list];
    list.splice(id, 1);
    this.setState({
      list: list
    });
  };

  update = id => {
    const list = [...this.state.list];
    list[id] = this.state.val2;
    this.setState({
      list,
      showText: !this.state.showText
    });
  };

  render() {
    return (
      <div className="mytodo">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            value={this.state.val}
            onChange={this.handleChange}
            placeholder="Add Task"
          />
          <button type="submit">Submit</button>

          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>
                {item}
                <button
                  onClick={() => {
                    this.delete(index);
                  }}
                >
                  X
                </button>
                {!this.state.showText ? (
                  <button
                    className="update"
                    onClick={() => {
                      this.setState({ showText: !this.state.showText });
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <span>
                    <input onChange={this.func} className="show" type="text" />{" "}
                    <button onClick={() => this.update(index)}>Submit</button>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default Todo;
