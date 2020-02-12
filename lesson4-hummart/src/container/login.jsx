import React, { Component } from "react";
import { Form, Button, Icon, Input, Checkbox } from "antd";
import { Redirect } from "react-router-dom";
import "../css/store.css";

class Store extends Component {
  state = { redirect: false };

  handleSubmit = e => {
    const data = JSON.parse(localStorage.getItem("login"));
    if (data.id === e.target[0].value && data.password === e.target[1].value) {
      this.setState({ redirect: true });
    }
  };
  renderRedirect = () => {
    if (this.state.redirect === true) {
      localStorage.setItem("redirect", '{"condition":true}');
      return <Redirect to="/storedetail" />;
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let data = { id: "admin", password: "admin" };
    localStorage.setItem("redirect", '{"condition":false}');
    localStorage.setItem("login", JSON.stringify(data));
    return (
      <div style={{ marginLeft: "30rem", marginTop: "10rem" }}>
        {this.renderRedirect()}
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
            <a className="login-form-forgot" href="/blank">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const Login = Form.create({ name: "normal_login" })(Store);
export default Login;
