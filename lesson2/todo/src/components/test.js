import React from "react";
import ReactDOM from "react-dom";
import { List, Typography } from "antd";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lists: [
            {id: 1, listValue: "hello",flg:false },
            { id: 2, listValue: "pal" ,flg:false}
          ],
          content: "",
        
          val:"",
          toggle:false
    };
  }
  handleChange = e =>{
   this.setState({content:e.target.value})
   console.log(this.state.content)
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    let newId = (e.id = Math.floor(Math.random() * 20));
    console.log(e.id);
    console.log(e.listValue);
    const addContent = this.state.content;
    console.log(this.state.content);
    const lists = [...this.state.lists, { id: newId, listValue: addContent }];
    this.setState({
      lists,
     content:""
    });
    
    console.log(lists);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input
            //   prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
             onChange={this.handleChange}
             value={this.state.content}
              placeholder="enter here"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              submit
            </Button>
          </Form.Item>
        </Form>
      
        <List
        //   bordered
          dataSource={this.state.lists}
          renderItem={item => <div><List.Item>{item.listValue} </List.Item> 
          <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Edit
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Delete
        </Button>
        
        </div>}
          
        />
        
      </div>
    );
  }
}

export default Test;
