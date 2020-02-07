import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Breadcrumb, Icon, Button, Card } from "antd";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import DecriptionBody from "../components/descriptionBody";
import { findByLabelText } from "@testing-library/react";

function Discription(props) {
  debugger;
  return (
    <div className="app">
      <Header
        ResetProductImage={props.ResetProductImages}
        updateProductImagesCounter={props.updateProductImagesCounter}
        changeStateOfDrawer={props.changeStateOfDrawer}
        bodyObject={props.bodyObject}
        changeCount={props.changeCount}
      />
      <br />
      <div style={{ display:"flex",justifyContent:"space-between",marginLeft: "7%" }}>
        <div>
          <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <Icon type="home" />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/mobiles">
              {/* <Icon type="user" /> */}
              <span>Mobile</span>
            </Link>
          </Breadcrumb.Item>
          {/* <Link to="/description"> */}
            <Breadcrumb.Item>Description</Breadcrumb.Item>
          {/* </Link> */}
        </Breadcrumb>
        </div>
        {/* <div style={{ marginRight:"100px"}}><Button >Add</Button></div> */}
      </div>

      <DecriptionBody
    
        index={props.location.state}
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
