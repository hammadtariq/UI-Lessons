import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Home  from  './components/Home';
import one from "./assets/one.jpg";
import ExtraContentOne from "./components/ExtraContentOne";
import ExtraContentTwo from "./components/ExtraContentTwo";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Delivery from "./components/Delivery";
import Cart from "./components/card";
import Categories from "./components/Categories";
import OnlineSuper from "./components/OnlineSuper";
import ExtraContentThree from "./components/ExtraContentThree";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: [],
      headTitle:"um",
      
    };
  }
  showdata = (id, title, price,count) => {
    console.log(id, price, title);
    console.log("helo");
    const updateCartItem = [
      ...this.state.cartItem,
      { id: id, price: price, title: title ,count:count}
    ];
    this.setState({ cartItem: updateCartItem });
    console.log(this.state.cartItem);
  };
add=(id)=>{
  console.log(id)
  
  this.state.cartItem.map((el)=>{
    console.log(el.id,id)
    if(id===el.id){
      console.log(this.state.cartItem.count);
    }
  
   
 })
}
 
  render() {
    return (
      <section>
        <div className="karachiP">
          <ExtraContentOne />
        </div>
        <div className="customcare">
          <ExtraContentTwo />
        </div>
        <Header 
        cartData={this.state.headTitle}
        showCartData={this.state.cartItem}
        sendCount={this.state.count}
        sendAdd={this.add}
         />
        <nav>
          <Navbar />
        </nav>
        <div className="sliderP">
          <Slider />
        </div>
        <div className="deliveryP">
          <Delivery />
        </div>
        <Cart
          sendShowData={this.showdata}
        />
        <Categories />
        <OnlineSuper />

        <ExtraContentThree />
        <Footer />
      </section>
    );
  }
}


export default App;
