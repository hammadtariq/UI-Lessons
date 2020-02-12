import React, { Component } from "react";
import "../css/Login.css";

import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import {Route, Redirect } from "react-router-dom";

class NormalLoginForm extends React.Component {
  state = {
    Redirect: true
  };
  handleSubmit = e => {
    e.preventDefault();
    debugger
    this.props.form.validateFields((err, values) => {
      if (!err) {
          debugger
        if (
            
          values.username == this.props.user &&
          values.password == this.props.password
        ) 
        {
            debugger
            localStorage.setItem("myLoginState","true")
            this.setState({
                Redirect:false
            })
        }else{
          message.error("Wrong Credentiel")
        }

        console.log("Received values of form: ", values);
        console.log(this.props);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            {this.state.Redirect ?  (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
              >
                Log in
              </Button>
            ):
            <Redirect to="dashboard"/>
            }
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
