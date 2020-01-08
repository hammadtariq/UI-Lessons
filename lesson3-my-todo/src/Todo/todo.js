import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, List } from "antd";

class Todo extends Component {
  state = {
    val: "",
    val3: "",
    list: [
      { text: "Abc", flag: false },
      { text: "DEF", flag: false },
      { text: "abc", flag: false },
      { text: "xyz", flag: false },
      { text: "CDe", flag: false }
    ],
    showText: false
  };

  func2 = e => {
    this.setState({ val3: e.target.value });
  };
  func = e => {
    this.setState({ val2: e.target.value });
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let text = this.state.val;
    if (this.state.val !== "") {
      let list = [...this.state.list, { text, flag: false }];
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
    list[id].text = this.state.val2;
    this.setState({
      list,
      showText: !this.state.showText
    });
  };

  updateText = id => {
    const list = this.state.list;
    if (list[id].flag === true) {
      list[id].text = this.state.val3;
      list[id].flag = false;
      this.setState({ list, val3: "" });
    } else {
      list[id].flag = true;
      this.setState({ list,val3:list[id].text });
    }
  };

  render() {
    return (
      <div className="mytodo">
        <Form layout="horizontal" className="antd" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input
              prefix={
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              onChange={this.handleChange}
              style={{ height: 60 }}
            />

            <Button icon="plus-circle" type="primary" block htmlType="submit" />
          </Form.Item>
          <List
            size="large"
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => {
              return (
                <List.Item>
                  {item.flag ? (
                    <Form.Item>
                      <Input
                        type="text"
                        value={this.state.val3}
                        prefix={
                          <Icon
                            type="info-circle"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        onChange={this.func2}
                      />
                      <Button
                        type="primary"
                        onClick={() => {
                          this.updateText(index);
                        }}
                      >
                        Update
                      </Button>
                    </Form.Item>
                  ) : (
                    <div className="my-item">
                      <span>{item.text}</span>
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
                        onClick={() => {
                          this.updateText(index);
                        }}
                      >
                        Update
                      </Button>
                    </div>
                  )}
                </List.Item>
              );
            }}
          />
        </Form>{" "}
      </div>
    );
  }
}

export default Todo;
