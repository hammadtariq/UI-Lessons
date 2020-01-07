import React, { Component } from "react";
//import "./todo.css";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, List } from "antd";

class Todo extends Component {
  state = {
    val: "",
    val2: "",
    list: ["Abc", "DEF", "abc", "xyz", "CDe"],
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

  updateText=id=>{
    this.setState({ showText: !this.state.showText})
    
  }

  render() {
    return (
      <div className="mytodo">
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input
              prefix={
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Add Task"
              onChange={this.handleChange}
              style={{ height: 60 }}
            />
          </Form.Item>

          <List
            size="small"
            bordered
            dataSource={this.state.list.map((item, index) => (
              <li key={index}>
                {!this.state.showText ? (
                  <span>
                    <b>{item.toUpperCase()}</b>
                    <Button
                      type="danger"
                      onClick={() => {
                        this.delete(index);
                      }}
                    >
                      X
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => {this.updateText(index)}}
                    >
                      Update
                    </Button>
                  </span>
                ) : (
                  <span>
                    <Form.Item>
                      <Input
                        prefix={
                          <Icon
                            type="info-circle"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Add Task"
                        onChange={this.func}
                      />
                    </Form.Item>
                    <Button
                      type="primary"
                      onClick={() => {
                        this.update(index);
                      }}
                    >
                      Update
                    </Button>
                  </span>
                )}
                
              </li>
            ))}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <Form.Item>
            <Button icon="plus" type="primary" block htmlType="submit" />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Todo;
