import Drawerr from "./components/drawer";
import Description from "./components/description";
import Categories from "./components/categories";
import Delivery from "./components/delivery";
import Slider from "./components/slider";
import Nav from "./components/nav";
import Top from "./components/top";
import Header from "./components/header";
import React, { Component } from "react";
import Item from "./components/item";
import "./App.css";
import m1 from "./pictures/mobile1.jpg";
import m2 from "./pictures/mobile2.jpg";
import m3 from "./pictures/mobile3.jpg";
import m4 from "./pictures/mobile4.jpg";
import m5 from "./pictures/mobile5.jpg";
import of1 from "./pictures/of1.jpg";
import of2 from "./pictures/of2.jpg";
import of3 from "./pictures/of3.jpg";
import of4 from "./pictures/of4.jpg";
import of5 from "./pictures/of5.jpg";

import { message } from "antd";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    style: "nav-div",
    total: 0,
    showZero: true,
    count: 0,
    visible: false,
    mobiles: [
      {
        title: "Samsung",
        description: "adastyghdfdg",
        price: 126000,
        picture: <img src={m1} alt="pic" width="100%" height="100%" />,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "adastyghdfdg",
        price: 126000,
        picture: <img src={m2} alt="pic" width="100%" height="100%" />,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "adastyghdfdg",
        price: 126000,
        picture: <img src={m3} alt="pic" width="100%" height="100%" />,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "adastyghdfdg",
        price: 126000,
        picture: <img src={m4} alt="pic" width="100%" height="100%" />,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "adastyghdfdg",
        price: 126000,
        picture: <img src={m5} alt="pic" width="100%" height="100%" />,
        quantity: 1
      }
    ],
    offers: [
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: <img src={of1} alt="offer1" width="100%" height="100%"></img>,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: <img src={of2} alt="offer1" width="100%" height="100%"></img>,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: <img src={of3} alt="offer1" width="100%" height="100%"></img>,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: <img src={of4} alt="offer1" width="100%" height="100%"></img>,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: <img src={of5} alt="offer1" width="100%" height="100%"></img>,
        quantity: 1
      }
    ],
    index: []
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  Cart = (id, arr) => {
    let count = this.state.count;
    let index = this.state.index;
    let total = this.state.total;
    count = count + 1;
    if (arr === "mobiles") {
      index.push(this.state.mobiles[id]);
      total = total + this.state.mobiles[id].price;
      total = total * this.state.mobiles[id].quantity;
    } else {
      index.push(this.state.offers[id]);
      total = total + this.state.offers[id].price;
      total = total * this.state.offers[id].quantity;
    }

    this.setState({
      showZero: false,
      count,
      index,
      total
    });
    message.success("Item Added");
  };

  Display = () => {
    this.setState({
      visible: true
    });
  };

  plus = ind => {
    let value = this.state.index;
    value[ind].quantity += 1;
    this.setState({
      index: value
    });
  };

  minus = ind => {
    let value = this.state.index;
    let updated;
    let count;
    if (value[ind].quantity > 0) {
      value[ind].quantity -= 1;
      this.setState({
        index: value
      });
    }
    if (value[ind].quantity === 0) {
      count = this.state.count;
      count -= 1;
      updated = value.filter(item => item.quantity !== 0);
      this.setState({
        index: updated,
        count,
        showZero: true
      });
    }
  };

  handleScroll = e => {
    let element = e.target;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   this.setState({
    //     style:'nav-again'
    //   })
    alert("Inside");
  };

  render() {
    return (
      <div className="main">
        <Top />
        <Header
          Display={this.Display}
          count={this.state.count}
          showZero={this.state.showZero}
        />
        <Nav style={this.state.style} />
        <Slider />
        <Delivery />
        <Item
          Cart={this.Cart}
          mobiles={this.state.mobiles}
          offers={this.state.offers}
        />
        <Categories />
        <Description />
        <Drawerr
          total={this.state.total}
          onClose={this.onClose}
          visible={this.state.visible}
          index={this.state.index}
          minus={this.minus}
          plus={this.plus}
        />

        <div onScroll={this.handleScroll}>{alert("Hello")}</div>
      </div>
    );
  }
}

export default App;
