import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import ExtraContentOne from "./components/ExtraContentOne";
import ExtraContentTwo from "./components/ExtraContentTwo";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Delivery from "./components/Delivery";
import OnlineSuper from "./components/OnlineSuper";
import ExtraContentThree from "./components/ExtraContentThree";
import Footer from "./components/Footer";
import CardProvider from "./providers/card-provider";
import CategoriesProvider from "./providers/categories-provider";
import Drawers from "./components/Drawer";
import ShowCardProvider from "./providers/show-card-provider";
import a from "./actions/showdrawersaction.js";
import DrawerProvider from "./providers/drawer-provider";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  add = id => {
    console.log(id);
    const stateCopy = [...this.state.cartItem];
    stateCopy.map((item, index) => {
      if (item.id == id) {
        console.log(item.id == id);

        const a = (item.counter += 1);
        const b = (item.price *= a);
        const cartItem = [...this.state.cartItem, { price: b, counter: a }];
        console.log(cartItem);
        this.setState(state => ({ cartItem: state.cartItem }));
      }
      console.log(this.state.cartItem);
    });
  };
  delete = id => {
    const stateCopy = [...this.state.cartItem];
    stateCopy.map((item, index) => {
      if (item.id == id) {
        console.log(item.id == id);
        if (item.counter > 1) {
          const a = (item.counter -= 1);
          const cartItem = [...this.state.cartItem, { counter: a }];
          console.log(cartItem);
          this.setState(state => ({ cartItem: state.cartItem }));
        }
      } else {
        item.counter = 1;
      }
      console.log(this.state.cartItem);
    });
  };

  render() {
    return (
      <section>
        <div className="karachiP">
          <ExtraContentOne />
        </div>
        <div className="customcare">
          <ExtraContentTwo />
        </div>

        <ShowCardProvider  />

        <DrawerProvider />

        <Navbar />

        <div className="sliderP">
          <Slider />
        </div>
        <div className="deliveryP">
          <Delivery />
        </div>

        <CardProvider />
        <CategoriesProvider />
        <OnlineSuper />
        <ExtraContentThree />
        <Footer />
      </section>
    );
  }
}

export default App;
