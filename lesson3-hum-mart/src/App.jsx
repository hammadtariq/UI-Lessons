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
import CategoriesComponet from './components/CategoriesComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: [],
      headTitle:"um",
      count:0,
      
    };
    
  }
  showdata = (id, title, price,counter,Img) => {
    console.log(id, price, title);
    console.log("helo");
    const updateCartItem = [
      ...this.state.cartItem,
      { id: id, price: price, title: title ,counter:counter,Img:Img}
    ];
    this.setState({ cartItem: updateCartItem });
    console.log(this.state.cartItem);
  };
add=(id)=>{
  console.log(id);

   
  const stateCopy = [...this.state.cartItem];
  stateCopy.map((item,index)=>{
    
    if(item.id==id){
      console.log(item.id==id)
    //  let a= item.counter;
    //  this.setState((state)=>console.log(state.cartItem[index].counter+=1))
    // this.setState((state)=> console.log(({cartItem:state.cartItem[index].counter+=1})))
    const a = item.counter+=1;
    const b = item.price*=a;
const cartItem = [...this.state.cartItem,{price:b,counter:a}]
    console.log(cartItem);
    this.setState((state)=>({cartItem:state.cartItem}))
      }
      console.log(this.state.cartItem);
  })
}
delete = (id)=>{
  const stateCopy = [...this.state.cartItem];
  stateCopy.map((item,index)=>{
    
    if(item.id==id){
      console.log(item.id==id)
      if(item.counter>1){
    const a = item.counter-=1;
   
const cartItem = [...this.state.cartItem,{counter:a}]
    console.log(cartItem);
    this.setState((state)=>({cartItem:state.cartItem}))
      }}
      else{
        item.counter=1;
      }
      console.log(this.state.cartItem);
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
        sendMinus= {this.delete}
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
