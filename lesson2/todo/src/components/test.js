import React from "react";
import ReactDOM from "react-dom";
import { List, Typography } from "antd";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { id: 1, listValue: "hello", flg: false },
        { id: 2, listValue: "pal", flg: false }
      ],
      content: "",

      val: "",
      toggle: false
    };
  }
  toggleEditState = id => {
    console.log(id);
    this.state.lists.map(item => {
      if (item.id == id) {
        item.flg = true;
        this.setState({ val: item.listValue });
      } else {
        item.flg = false;
      }
    });
    this.setState({
      toggle: !this.state.toggle
    });
    console.log(this.state.toggle);
  };
  handleChange = e => {
    this.setState({ content: e.target.value });
    console.log(this.state.content);
  };
  handleSubmit = e => {
    e.preventDefault();
    let newId = (e.id = Math.floor(Math.random() * 20));
    console.log(e.id);
    console.log(e.listValue);
    const addContent = this.state.content;
    console.log(this.state.content);
    const lists = [...this.state.lists, { id: newId, listValue: addContent }];
    this.setState({
      lists,
      content: ""
    });

    console.log(lists);
  };
  onUpdateChange = e => {
    this.setState({
      val: e.target.value
    });

    console.log("onUpdateChange", this.state.edit);
  };
  editToDoHandler = id => {
    const lists = [...this.state.lists];
    lists.map(list => {
      if (list.id === id) {
        list.listValue = this.state.val;
        list.flg = true;
      }
      this.setState({ lists, toggle: false });
    });
  };
  deleteData = addid => {
    console.log(addid);
    const updatedList = this.state.lists.filter(list => {
      return list.id !== addid;
    });
    console.log(updatedList);
    this.setState({
      lists: updatedList
    });
  };

  render() {
    return (
      <div>
        <h1>CRUD REACT</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
           <div className="innerDiv">
           <Input
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="enter here"
            />
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button submit"
            >
              submit
            </Button>
           </div>
          
            
          </Form.Item>
        </Form>

        <List
        size="large"
          dataSource={this.state.lists}
          renderItem={item => (
            <div className="antP">
              {this.state.toggle && item.flg == true ? (
                <div className="innerDiv">
                  <Form.Item>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.content}
                      placeholder="enter here"
                      onChange={this.onUpdateChange}
                      value={this.state.val}
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => this.editToDoHandler(item.id)}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div className="innerDiv">
                  <List.Item>{item.listValue} </List.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => this.toggleEditState(item.id)}
                  >
                    {" "}
                    Edit
                  </Button>
                  <Button
                    type="danger"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => this.deleteData(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default Test;
