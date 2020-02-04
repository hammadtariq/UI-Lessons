import React, { Component } from "react";
import { Icon } from "antd";

class Delivery extends Component {
  render() {
    return (
      <div className="deliveryp">
        <div className="delivery">
          <div className="items">
            <span>
              <Icon type="car" style={{marginRight:'1rem'}} />
              Same/Next Day Delivery
              <br />
              <small>
                Free delivery on all orders over
                <br /> Rs. 1,000 Rs 100 for orders below Rs 1000
              </small>
            </span>
            <span>
              <Icon type="dollar"  style={{marginRight:'1rem'}}/>
              Cash On Delivery
              <br />
              <small>You pay when rider comes at your address.</small>
            </span>
            <span>
              <Icon type="phone" style={{marginRight:'1rem'}} />
              Online Support
              <br />
              <small>You pay when rider comes at your address.</small>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
