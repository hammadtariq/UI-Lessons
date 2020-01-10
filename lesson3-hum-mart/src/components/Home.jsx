import React from "react";
import one from "../assets/one.jpg";
import ExtraContentOne from "./ExtraContentOne";
import ExtraContentTwo from "./ExtraContentTwo";
import Header from "./Header";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Delivery from "./Delivery";
import Cart from "./card";
import Categories from "./Categories";
import OnlineSuper from "./OnlineSuper";
import ExtraContentThree from "./ExtraContentThree";
import Footer from "./Footer";
class Home extends React.Component {
  render() {
    return (
      <section>
        <div className="karachiP">
          <ExtraContentOne />
        </div>
        <div className="customcare">
          <ExtraContentTwo />
        </div>
        <Header />
        <nav>
          <Navbar />
        </nav>
        <div className="sliderP">
          <Slider />
        </div>
        <div className="deliveryP">
          <Delivery />
        </div>
        <Cart />
        <Categories />
        <OnlineSuper />

        <ExtraContentThree />
        <Footer />
      </section>
    );
  }
}
export default Home;
