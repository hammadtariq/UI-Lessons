import React, { Component } from "react";
import { Button, Icon, Drawer } from "antd";

class Drawerr extends Component {
  render() {
    debugger;
    return (
      <Drawer
      width='20%'
        title="MY CART"
        placement="right"
        onClose={this.props.onClose}
        visible={this.props.visible}
        keyboard="true"
      >
        {this.props.index.length > 0 ? (
          <div>
            {this.props.index.map((item, index) => {
              return (
                <div key={index}>
                  <span>
                    {
                      <img
                        src={item.picture}
                        alt="pic"
                        width="50px"
                        height="50px"
                      />
                    }
                  </span>
                  <span>{item.title + " " + item.description + " "}</span>
                  <div className="cart-object">
                    <Button
                      onClick={() => {
                        this.props.minus(index, this.props.index);
                      }}
                      size='small'
                      type="danger"
                      shape="circle"
                    >
                      <Icon type="minus" />
                    </Button>
                    <b>{item.quantity}</b>
                    <Button
                      onClick={() => {
                        this.props.plus(index, this.props.index);
                      }}
                      size='small'
                      type="danger"
                      shape="circle"
                    >
                      <Icon type="plus" />
                    </Button>
                    <strong>Rs - {item.price}</strong>
                  </div>
                </div>
              );
            })}
            <div style={{ width: 250 }}>
              <Button
                onClick={() => this.props.checkout(this.props.index)}
                style={{ marginTop: 300 }}
                type="danger"
                block
              >
                Proceed to CheckOut Rs : {this.props.total}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            No Item on Cart
            <div style={{ marginTop: 500 }}>
              <Button type="danger" block>
                Start Shopping
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    );
  }
}

export default Drawerr;
