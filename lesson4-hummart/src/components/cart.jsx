import { message } from "antd";
import React, { Component } from "react";

class Cart extends Component {
  state = {
    count: 0,
    index: [],
    total: 0,
    showZero: true
  };

  Cart = (id, arr) => {
    debugger;
    console.log(arr)
    let count = this.state.count;
    let index = this.state.index;
    let total = this.state.total;
    count = count + 1;
    if (arr === "mobiles") {
      index.push(this.props.mobile[id]);
      total = total + this.props.mobile[id].price;
      total = total * this.props.mobile[id].quantity;
    } else {
      index.push(this.props.offer[id]);
      total = total + this.props.offer[id].price;
      total = total * this.props.offer[id].quantity;
    }

    this.setState({
      showZero: false,
      count,
      index,
      total
    });
    message.success("Item Added");
  };

  render() {
  return <div>{this.Cart}</div>;
  }
}
export default Cart;
