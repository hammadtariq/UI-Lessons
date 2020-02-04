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

class Home extends Component {

  // componentDidMount() {debugger
  //   window.addEventListener("scroll", this.props.scroll(window.scrollY));
  // }

  // componentWillMount() {
  //   window.removeEventListener("scroll", this.props.scroll(window.scrollY));
  // }
  

  render() {
    return (
      <div className="main">
        <Top />
        <Header
          props={this.props}
          Display={this.props.display}
          count={this.props.count}
          showZero={this.props.showZero}
        />
        <Nav style={this.props.nav} />
        <Slider />
        <Delivery />

        <Item addCart={this.props.addCart} mobiles={this.props.mobile} offers={this.props.offer} />
        <Categories />
        <Description />
        <Drawerr
          checkout={this.props.checkOut}
          total={this.props.total}
          onClose={this.props.onClose}
          visible={this.props.visible}
          index={this.props.index}
          minus={this.props.minus}
          plus={this.props.plus}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
