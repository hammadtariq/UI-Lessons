import React, { Component } from "react";
import { Card, Button } from "antd";
import Cart from "../components/cart";
const { Meta } = Card;

class Item extends Component {
  CartCall = (index, str) => {};

  render() {
    console.log(this.props)
    debugger;
    return (
      <div className="item-parent">
        <div className="mobile">
          <div className="m">MOBILE PHONES</div>
          <div className="card">
            {this.props.mobiles &&
              this.props.mobiles.map((item, index) => {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 250 }}
                    cover={<img src={item.picture} alt='pic'/>}
                  >
                    <Meta title={item.title} description={item.description} />
                    <div className="card-button">
                      <strong>{item.price}</strong>
                      <Button onClick={() => ""} shape="round" type="danger">
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
        <div className="offers">
          <div className="f"> NEW BUNDLE OFFERS</div>
          <div className="card">
            {this.props.offers &&
              this.props.offers.map((item, index) => {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 250 }}
                    cover={<img src={item.picture} alt='pic'/>}
                  >
                    <Meta title={item.title} description={item.description} />
                    <div className="card-button">
                      <strong>{item.price}</strong>
                      <Button
                        onClick={() => this.props.Cart(index, "offers")}
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
    );
  }
}

export default Item;
