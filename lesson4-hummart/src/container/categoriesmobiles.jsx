import Drawerr from "../components/drawer";
import Description from "../components/description";
import Categories from "../components/categories";
import Delivery from "../components/delivery";
import Slider from "../components/slider";
import Nav from "../components/nav";
import Top from "../components/top";
import Header from "../components/header";
import React, { Component } from "react";
import Item from "../components/item";
import Footer from "../components/footer";
import "../App.css";
import { Breadcrumb, Menu, Icon, Dropdown } from "antd";
import "../css/categoriesMobile.css";
import "../App.css";

class Mobiles extends Component {
  state = {
    style: "nav-div"
  };

  render() {
    return (
      <div className="main">
        <Top />
        <Header
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style={this.state.style} />
        <div className="parent">
          <div className="menu">
            <Menu>
              <Menu.Item>Nokia</Menu.Item>
              <Menu.Item>Xiaomi</Menu.Item>
              <Menu.Item>Samsung</Menu.Item>
              <Menu.Item>Huawei</Menu.Item>
              <Menu.Item>Infinity</Menu.Item>
              <Menu.Item>Techno</Menu.Item>
              <Menu.Item>Motorola</Menu.Item>
            </Menu>
          </div>
          <div className="breadcrumb">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="mobiles">
                Mobiles Tablets & Laptops
              </Breadcrumb.Item>
              <Breadcrumb.Item href="mobiles">Mobiles</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className='dropdown'>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">1st menu item</Menu.Item>
                  <Menu.Item key="2">2nd memu item</Menu.Item>
                  <Menu.Item key="3">3rd menu item</Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <p>Sort By:  Hello</p>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default Mobiles;
