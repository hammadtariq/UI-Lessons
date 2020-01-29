import Drawerr from "../components/drawer";
import Nav from "../components/nav";
import Top from "../components/top";
import Header from "../components/header";
import React, { Component } from "react";
import Footer from "../components/footer";
import { Icon, Breadcrumb, Card, Button, Tabs, Form, Rate, Input } from "antd";
const { TabPane } = Tabs;

class Specific extends Component {
  render() {
    return (
      <div>
        <Top />
        <Header
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style="nav-div" />
        <div style={{ marginLeft: "7rem" }} className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="mobiles">
              Mobiles Tablets & Laptops
            </Breadcrumb.Item>
            <Breadcrumb.Item href="mobiles">
              {this.props.location.state.state}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Card
            style={{
              width: "40%",
              height: "50%",
              marginLeft: "8rem",
              marginTop: "2rem"
            }}
            cover={
              <img
                src={this.props.mobile[this.props.location.state.state].picture}
                alt="pic"
                width="5%"
                height="50%%"
              />
            }
          ></Card>
          <div
            style={{
              width: "60%",
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <h2 style={{ marginLeft: "3rem" }}>
              {this.props.mobile[this.props.location.state.state].description}
            </h2>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ marginLeft: "3rem", color: "green" }}>
                Rs-{this.props.mobile[this.props.location.state.state].price}
              </h1>
              <Button
                style={{ width: "80%", height: "50%", marginLeft: "3rem" }}
                onClick={() =>
                  this.props.addCart(this.props.location.state.state)
                }
                type="danger"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "8rem",
            marginTop: "3rem",
            marginBottom: "5rem"
          }}
        >
          <Tabs>
            <TabPane style={{ display: "flex" }} tab="MORE INFORMATION" key="1">
              <strong style={{ width: "20%" }}>
                Brand
                <br />
                Sold By
                <br />
                Return Policy
                <br />
                Country of Manufacture
                <br />
                Warranty
                <br />
                Option
                <br />
                Express Shipping
              </strong>
              <p style={{ width: "50%" }}>
                {this.props.mobile[this.props.location.state.state].title}
                <br />
                {"XYZ"}
                <br />
                {"3 Days Return and Exchange"}
                <br />
                {"N/A"}
                <br />
                {"Not Applicable"}
                <br />
                {this.props.mobile[this.props.location.state.state].description}
                <br />
                {"No"}
                <br />
              </p>
            </TabPane>
            <TabPane tab="REVIEWS" key="2">
              <Form>
                <Form.Item required label="Rating">
                  <Rate />
                </Form.Item>
                <Form.Item required label="NickName">
                  <Input style={{ width: "40%" }} />
                </Form.Item>
                <Form.Item required label="Summary">
                  <Input style={{ width: "40%" }} />
                </Form.Item>
                <Form.Item required label="Review">
                  <Input style={{ width: "40%", height: "80px" }} />
                </Form.Item>
                <Button type="danger">SUBMIT REVIEW</Button>
              </Form>
            </TabPane>
          </Tabs>
        </div>
        <Drawerr
          total={this.props.total}
          onClose={this.props.onClose}
          visible={this.props.visible}
          index={this.props.index}
          minus={this.minus}
          plus={this.plus}
        />
        <Footer />
      </div>
    );
  }
}
export default Specific;
