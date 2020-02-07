import Drawerr from "../components/drawer";
import Nav from "../components/nav";
import Top from "../components/top";
import Header from "../components/header";
import React, { Component } from "react";
import Footer from "../components/footer";
import { Icon, Breadcrumb, Card, Button, Tabs, Form, Rate, Input } from "antd";
const { TabPane } = Tabs;

class Specific extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      name: null,
      Review: null
    };
    this.Rate = this.Rate.bind(this);
    this.Name = this.Name.bind(this);
    this.Review = this.Review.bind(this);
  }

  Rate(e) {
    this.setState({ stars: e });
  }

  Name(e) {
    debugger;
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let list = [...this.props.mobile];
    list[this.props.match.params.id].stars = this.state.stars;
    let updated = [...list];
    this.props.onSubmit(updated);
  }

  Review(e) {
    debugger;
    this.setState({ Review: e.target.value });
  }

  render() {
    debugger;
    return (
      <div>
        <Top />
        <Header
          props={this.props}
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style={this.props.nav} />
        <div style={{ marginLeft: "7rem" }} className="breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <a href="/">
                <Icon type="home" />
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/mobiles">Mobiles Tablets & Laptops</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/mobiles">{this.props.match.params.id}</a>
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
                src={this.props.mobile[this.props.match.params.id].picture}
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
              {this.props.mobile[this.props.match.params.id].description}
              <br />
              {
                <Rate
                  disabled
                  defaultValue={
                    this.props.mobile[this.props.match.params.id].stars
                  }
                />
              }
            </h2>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ marginLeft: "3rem", color: "green" }}>
                Rs-{this.props.mobile[this.props.match.params.id].price}
              </h1>
              <Button
                style={{
                  width: "80%",
                  height: "50%",
                  marginLeft: "3rem",
                  backgroundColor: "#e96125",
                  color: "white"
                }}
                onClick={() => this.props.addCart(this.props.match.params.id)}
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
                <br />
                Sold By
                <br />
                <br />
                Return Policy
                <br />
                <br />
                Country of Manufacture
                <br />
                <br />
                Warranty
                <br />
                <br />
                Option
                <br />
                <br />
                Express Shipping
              </strong>
              <p style={{ width: "50%" }}>
                {this.props.mobile[this.props.match.params.id].title}
                <br />
                <br />
                {"XYZ"}
                <br />
                <br />
                {"3 Days Return and Exchange"}
                <br />
                <br />
                {"N/A"}
                <br />
                <br />
                {"Not Applicable"}
                <br />
                <br />
                {this.props.mobile[this.props.match.params.id].description}
                <br />
                <br />
                {"No"}
              </p>
            </TabPane>
            <TabPane tab="REVIEWS" key="2">
              <Form
                onSubmit={e =>
                  this.onSubmit(
                    e,
                    this.props.mobile,
                    this.props.match.params.id
                  )
                }
              >
                <Form.Item required label="Rating">
                  <Rate onChange={this.Rate} />
                </Form.Item>
                <Form.Item required label="NickName">
                  <Input onChange={this.Name} style={{ width: "40%" }} />
                </Form.Item>
                <Form.Item required label="Summary">
                  <Input style={{ width: "40%" }} />
                </Form.Item>
                <Form.Item required label="Review">
                  <Input
                    onChange={this.Review}
                    style={{ width: "40%", height: "80px" }}
                  />
                </Form.Item>
                <Button type="danger" htmlType="submit">
                  SUBMIT REVIEW
                </Button>
              </Form>
            </TabPane>
          </Tabs>
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
export default Specific;
