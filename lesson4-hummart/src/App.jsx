import React, { Component } from "react";
import "./App.css";
import { Icon, Input, Card, Button } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;
const { Meta } = Card;
class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="top">
          <div className="karachi">Delivering Only in Karachi</div>
          <div className="contact">
            <p>
              <Icon type="phone" />
              (021)111116278 <a href="https://">Costumer Care</a>
              <a href="https://">Login</a>
            </p>
          </div>
        </div>
        <div className="header">
          <p>HumMart</p>
          <Search
            className="search"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <p>Infinix</p>
          <p>
            <Icon type="shopping-cart" />
          </p>
        </div>
        <div className="nav">
          <div className="nav-div"></div>
        </div>
        <div className="slider-parent">
          <div class="slider-main">
            <div className="left">
              <div className="left-top">Left Top</div>
              <div className="left-bottom">Left Bottom</div>
            </div>
            <div className="right">right</div>
          </div>
        </div>
        <div className="deliveryp">
          <div className="delivery">
            <div className="items">
              <span>
                <Icon type="car" />
                Same/Next Day Delivery
                <br />
                <small>
                  Free delivery on all orders over
                  <br /> Rs. 1,000 Rs 100 for orders below Rs 1000
                </small>
              </span>
              <span>
                <Icon type="dollar" />
                Cash On Delivery
                <br />
                <small>You pay when rider comes at your address.</small>
              </span>
              <span>
                <Icon type="phone" />
                Online Support
                <br />
                <small>You pay when rider comes at your address.</small>
              </span>
            </div>
          </div>
        </div>
        <div className="item-parent">
          <div className="mobile">
            <div className="m">Mobile Phones</div>
            <div className='card'>
            <Card
              hoverable
              style={{ width: 250  }}
              cover={
                <p>Picture1</p>
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
              <Button>Hello</Button>
            </Card>
            <Card
              hoverable
              style={{ width: 250  }}
              cover={
                <p>Picture2</p>
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 250  }}
              cover={
                <p>Picture3</p>
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 250  }}
              cover={
                <p>Picture4</p>
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 250  }}
              cover={
                <p>Picture5</p>
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            </div>
          </div>
          <div className="offers">
            <div className="f"> Offer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
