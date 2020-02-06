import Drawerr from "../components/drawer";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
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
      pathname: `/mobiles/${id}`
    });
  }

  render() {
    return (
      <div className="main">
        <Top />
        <Header
          props={this.props}
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style={this.props.nav} />
        <div className="parent">
          <div className="menu">
            <Link to="/blank">
              <Menu>
                <Menu.Item>Nokia</Menu.Item>
                <Menu.Item>Xiaomi</Menu.Item>
                <Menu.Item>Samsung</Menu.Item>
                <Menu.Item>Huawei</Menu.Item>
                <Menu.Item>Infinity</Menu.Item>
                <Menu.Item>Techno</Menu.Item>
                <Menu.Item>Motorola</Menu.Item>
              </Menu>
            </Link>
          </div>
          <div className="bdparent">
            <div className="bdmenu">
              <div className="breadcrumb">
                <Breadcrumb separator=">">
                  <Link to="/">
                    <Breadcrumb.Item>
                      <Icon type="home" />
                    </Breadcrumb.Item>
                  </Link>
                  <Breadcrumb.Item>Mobiles Tablets & Laptops</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="dropdown">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        onClick={() => this.props.sort(this.props.mobile)}
                        key="1"
                      >
                        Price
                      </Menu.Item>
                      <Menu.Item onClick={() => this.props.sortName(this.props.mobile)} key="2">Product Name</Menu.Item>
                      <Menu.Item key="3">Position</Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Button>
                    Sort By <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className="card-div">
              <div className="row1">
                {this.props.mobile &&
                  this.props.mobile.map((item, index) => {
                    return (
                      <div style={{ width: "25%", height: "50%" }}>
                        <Card
                          onClick={() => {
                            this.Link(index);
                          }}
                          key={index}
                          hoverable
                          style={{ width: "100%", height: "50%" }}
                          cover={<img src={item.picture} alt="pic" />}
                        >
                          <Meta
                            title={item.title}
                            description={item.description}
                          />
                          <div className="card-button">
                            <strong style={{ fontSize: "20px" }}>
                              {"Rs " + item.price}
                            </strong>
                          </div>
                        </Card>
                        <Button
                          onClick={() => this.props.addCart(index)}
                          shape="round"
                          type="danger"
                          style={{
                            marginLeft: "7rem",
                            marginTop: "5rem",
                            backgroundColor: "#e96125"
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
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
