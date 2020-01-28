import Drawerr from "../components/drawer";
import Description from "../components/description";
import Categories from "../components/categories";
import Delivery from "../components/delivery";
import Slider from "../components/slider";
import Nav from "../components/nav";
import Top from "../components/top";
import Header from "../components/header";
import React, { Component } from "react";
import Item from "../components/item";
import Footer from "../components/footer";
import "../App.css";
import "antd/dist/antd.css";

let lastY = 0;
class Home extends Component {
  state = {
    style: "nav-div",
    index: []
  };


  // Cart = (id, arr) => {
  //   let count = this.state.count;
  //   let index = this.state.index;
  //   let total = this.state.total;
  //   count = count + 1;
  //   if (arr === "mobiles") {
  //     index.push(this.state.mobiles[id]);
  //     total = total + this.state.mobiles[id].price;
  //     total = total * this.state.mobiles[id].quantity;
  //   } else {
  //     index.push(this.state.offers[id]);
  //     total = total + this.state.offers[id].price;
  //     total = total * this.state.offers[id].quantity;
  //   }

  //   this.setState({
  //     showZero: false,
  //     count,
  //     index,
  //     total
  //   });
  //   message.success("Item Added");
  // };

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
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    lastY = window.scrollY;
    if (lastY >= 177) {
      this.setState({
        style: "nav-again"
      });
    } else {
      this.setState({
        style: "nav-div"
      });
    }
  };

  render() {
    return (
      <div className="main">
        <Top />
        <Header
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style={this.state.style} />
        <Slider />
        <Delivery />

        <Item mobiles={this.props.mobile} offers={this.props.offer} />
        <Categories />
        <Description />
        <Drawerr
          total={this.props.total}
          onClose={this.props.onClose}
          visible={this.props.visible}
          index={this.state.index}
          minus={this.minus}
          plus={this.plus}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
