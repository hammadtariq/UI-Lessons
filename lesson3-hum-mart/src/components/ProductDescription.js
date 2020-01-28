import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import ExtraContentOne from "./ExtraContentOne";
import ExtraComtentTwo from "./ExtraContentTwo";
import Header from "./Header";
import Navbar from "./Navbar";
import { Icon, Button, Tabs, Form, Input } from "antd";
import "../css/product-description.css";
import Footer from "./Footer";
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.post, "sk");
    const { post } = this.props;
    const { TabPane } = Tabs;
    const { TextArea } = Input;
    return (
      <div>
        <div className="karachiP">
          <ExtraContentOne />
        </div>
        <div className="customcare">
          <ExtraComtentTwo />
        </div>
        <Header showDrawer={this.showDrawer} />
        {/* <Drawers
             visible={this.state.visible}
             onClose={this.onClose}
             showCartData={this.state.cartItem}
             sendCount={this.state.count}
             sendAdd={this.add}
             sendMinus={this.delete}
            /> */}
        <nav>
          <Navbar />
        </nav>
        <div className="des-page">
          <Icon type="home" />
          <Icon type="right" />
          <p> Mobiles Tablets & Laptops </p>
          <Icon type="right" />
          <p>Xiaomi Mi A3 (2019)</p>
          <p>|</p>
          <p>White</p>
          <p>|</p>
          <p>With Official Warranty</p>
        </div>

        <div className="des-body">
          <div className="des-img">
            <img src={post.Img} height="400px"></img>
          </div>
          <div className="des-cart">
            <div className="des-cart-up">
              <h1>{post.title}</h1>
              <p className="des-cart-p">4 GB | 64 GB</p>
              <span className="five-star">
                <Icon type="star" />
                <Icon type="star" />
                <Icon type="star" />
                <Icon type="star" />
                <Icon type="star" />
                <p>Be the first to review this product</p>
              </span>
            </div>
            <div className="des-cart-down">
              <p>Rs:{post.price}</p>
              <Button type="danger" icon="shopping" block>
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
        <div className="des-details">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              <div className="tab-one">
                <div className="tab-one-child">
                  <b>Brand </b>
                  <p>Xiaomi Mi</p>
                </div>
                <div className="tab-one-child">
                  <b>Sold By </b>
                  <p>Smartlink Technologies</p>
                </div>
                <div className="tab-one-child">
                  <b>Return Policy </b>
                  <p>3 Day Return and Exchange</p>
                </div>
                <div className="tab-one-child">
                  <b>Country of Manufacture </b>
                  <p>N/A</p>
                </div>
                <div className="tab-one-child">
                  <b>Warranty </b>
                  <p>Not Applicable</p>
                </div>
                <div className="tab-one-child">
                  <b>Option </b>
                  <p>4 GB | 64 GB</p>
                </div>
                <div className="tab-one-child">
                  <b>Express Shipping </b>
                  <p>No</p>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <div>
                <p>YOU'RE REVIEWING:</p>
                <h3>{post.title}</h3>
                <p>Your Rating</p>
                <span>
                  <Icon type="star" />
                  <Icon type="star" />
                  <Icon type="star" />
                  <Icon type="star" />
                  <Icon type="star" />
                </span>
              </div>
              <div className="tab-two-child">
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item>
                    <Input placeholder="Basic usage" size="large" />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Basic usage" size="large" />
                  </Form.Item>
                  <Form.Item>
                    <TextArea rows={4} />
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      SUBMIT REVIEW
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.descriptionId;
  console.log(ownProps, id, "hjshjdhasjdhj", state);
  return {
    post: state.categoriesData.find(post => post.id == id)
  };
};
export default connect(mapStateToProps)(ProductDescription);
