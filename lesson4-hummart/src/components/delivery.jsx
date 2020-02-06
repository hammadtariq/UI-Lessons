import React, { Component } from "react";
import { Icon } from "antd";

class Delivery extends Component {
  render() {
    return (
      <div className="deliveryp">
        <div className="delivery">
          <div className="items">
            <span>
              <Icon
                type="car"
                style={{ marginRight: "1rem", color: "green" }}
              />
              Same/Next Day Delivery
              <br />
              <small style={{fontWeight:'normal',marginLeft:'2rem'}}>
                Free delivery on all orders over
              </small>
              <br />
              <small style={{fontWeight:'normal',marginLeft:'2rem'}}> Rs. 1,000 Rs 100 for orders below Rs 1000</small>
            </span>
            <span>
              <Icon
                type="dollar"
                style={{ marginRight: "1rem", color: "green" }}
              />
              Cash On Delivery
              <br />
              <small style={{fontWeight:'normal',marginLeft:'2rem'}}>
                You pay when rider comes at your address.
              </small>
            </span>
            <span>
              <Icon
                type="phone"
                style={{ marginRight: "1rem", color: "green" }}
              />
              Online Support
              <br />
              <small style={{fontWeight:'normal',marginLeft:'2rem'}}>
                You pay when rider comes at your address.
              </small>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
