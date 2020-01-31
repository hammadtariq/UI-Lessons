import Drawerr from "../components/drawer";
import Nav from "../components/nav";
import Top from "../components/top";
import Header from "../components/header";
import React, { Component } from "react";
import Footer from "../components/footer";
import "../App.css";
import { Breadcrumb, Menu, Icon, Dropdown, Button, Card } from "antd";
import "../css/categoriesMobile.css";
import "../App.css";
const { Meta } = Card;

class Mobiles extends Component {
  Link(id) {
    this.props.history.push({
      pathname: `/mobiles/${id}`,
      state: { state: id }
    });
  }

  render() {
    return (
      <div className="main">
        <Top />
        <Header
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style={this.props.nav} />
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
          <div className="bdparent">
            <div className="bdmenu">
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
              <div className="dropdown">
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
                  <p>Sort By: Hello</p>
                </Dropdown>
              </div>
            </div>
            <div className="card-div">
              <div className="row1">
                {this.props.mobile &&
                  this.props.mobile.map((item, index) => {
                    return (
                      <Card
                        bordered="true"
                        key={index}
                        hoverable
                        style={{ width: "25%", height: "50%" }}
                        cover={<img src={item.picture} alt="pic" />}
                      >
                        <Meta
                          onClick={() => {
                            this.Link(index);
                          }}
                          title={item.title}
                          description={item.description}
                        />
                        <div className="card-button">
                          <strong>{item.price}</strong>
                          <Button
                            onClick={() => this.props.addCart(index)}
                            shape="round"
                            type="danger"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <Drawerr
          checkout={this.props.checkout}
          total={this.props.total}
          onClose={this.props.onClose}
          visible={this.props.visible}
          index={this.props.index}
          minus={this.props.minus}
          plus={this.props.plus}
        />
        <Footer />
      </div>
    );
  }
}

export default Mobiles;
