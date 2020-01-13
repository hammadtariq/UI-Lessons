import React, { Component } from "react";
import { Card, Button } from "antd";
const { Meta } = Card;

class Item extends Component {
  render() {
    return (
      <div className="item-parent">
        <div className="mobile">
          <div className="m">MOBILE PHONES</div>
          <div className="card">
            {this.props.mobiles.map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  style={{ width: 250 }}
                  cover={item.picture}
                >
                  <Meta title={item.title} description={item.description} />
                  <div className="card-button">
                    <strong>{item.price}</strong>
                    <Button
                      onClick={() => this.props.Cart(index, "mobiles")}
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
        <div className="offers">
          <div className="f"> NEW BUNDLE OFFERS</div>
          <div className="card">
            {this.props.offers.map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  style={{ width: 250 }}
                  cover={item.picture}
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
