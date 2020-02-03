import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Breadcrumb, Icon, Button, Card } from "antd";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import DecriptionBody from "../components/descriptionBody";

function Discription(props) {
  debugger;
  return (
    <div className="app">
      <Header
        changeStateOfDrawer={props.changeStateOfDrawer}
        bodyObject={props.bodyObject}
        changeCount={props.changeCount}
      />
      <br />
      <div style={{ marginLeft: "7%" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <Icon type="home" />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/mobiles">
              <Icon type="user" />
              <span>Mobile</span>
            </Link>
          </Breadcrumb.Item>
          <Link to="/description">
            <Breadcrumb.Item>Descriptiom</Breadcrumb.Item>
          </Link>
        </Breadcrumb>
      </div>

      <DecriptionBody
        index={props.location.state.index}
        changeStateOfDrawer={props.changeStateOfDrawer}
        bodyObject={props.bodyObject}
        changeCount={props.changeCount}
        updateCartList={props.updateCartList}
      />
      <Footer />
    </div>
  );
}

export default Discription;
