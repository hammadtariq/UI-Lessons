import React, { Component } from "react";
import { Card, Button } from "antd";
const { Meta } = Card;

class Item extends Component {
  CartCall = (index, str) => {};

  render() {
    console.log(this.props);
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
                    style={{ width: 250, height: 100 }}
                    cover={<img src={item.picture} alt="pic" />}
                  >
                    <Meta title={item.title} description={item.description} />
                    <div className="card-button">
                      <strong style={{ fontSize: "20px" }}>
                        {"Rs  " + item.price}
                      </strong>
                      <Button
                        onClick={() => this.props.addCart(index, "mobiles")}
                        shape="round"
                        type="danger"
                        style={{
                          backgroundColor: "#e96125"
                        }}
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
            {this.props.offers &&
              this.props.offers.map((item, index) => {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 250, height: 100 }}
                    cover={<img src={item.picture} alt="pic" />}
                  >
                    <Meta title={item.title} description={item.description} />
                    <div className="card-button">
                      <strong style={{ fontSize: "20px" }}>
                        {"Rs  " + item.price}
                      </strong>
                      <Button
                        onClick={() => this.props.addCart(index, "offers")}
                        shape="round"
                        type="danger"
                        style={{
                          backgroundColor: "#e96125"
                        }}
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
