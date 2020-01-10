import React from 'react';
import {Icon} from 'antd'
const Delivery = props =>(
    <div className="delivery">
            <div className="deliveryOne">
              <div className="deliveryImg">
              <Icon type="dashboard" />
              </div>
              <div className="deliveryContent">
                <h3>Same/Next Day Delivery</h3>
                <p>Free delivery on all orders over Rs. 1,000

Rs 100 for orders below Rs 1000</p>
              </div>
            </div>
            <div className="deliveryOne">
              <div className="deliveryImg">
              <Icon type="fire" />
              </div>
              <div className="deliveryContent">
                <h3>Cash On Delivery</h3>
                <p>You pay when rider comes at your address.</p>
              </div>
            </div>
            <div className="deliveryOne">
              <div className="deliveryImg">
              <Icon type="experiment" />
              </div>
              <div className="deliveryContent">
                <h3>Online Support</h3>
                <p>Customer support from 9AM - Midnight

(021)111 116 278

</p>
              </div>
            </div>
          </div>
);
export default Delivery