// import React from "react";
// import one from "../assets/one.jpg";
// import ExtraContentOne from "./ExtraContentOne";
// import ExtraContentTwo from "./ExtraContentTwo";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import Slider from "./Slider";
// import Delivery from "./Delivery";
// import Cart from "./card";
// import Categories from "./Categories";
// import OnlineSuper from "./OnlineSuper";
// import ExtraContentThree from "./ExtraContentThree";
// import Footer from "./Footer";

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cartItem: [],
//       count:"ksjdkjks"
//     };
//   }
//   showdata = (id, title, price) => {
//     console.log(id, price, title);
//     console.log("helo");
//     const updateCartItem = [
//       ...this.state.cartItem,
//       { id: id, price: price, title: title }
//     ];
//     this.setState({ cartItem: updateCartItem });
//     console.log(this.state.cartItem);
//   };

 
//   render() {
//     return (
//       <section>
//         <div className="karachiP">
//           <ExtraContentOne />
//         </div>
//         <div className="customcare">
//           <ExtraContentTwo />
//         </div>
//         <Header cartData={this.state.count} />
//         <nav>
//           <Navbar />
//         </nav>
//         <div className="sliderP">
//           <Slider />
//         </div>
//         <div className="deliveryP">
//           <Delivery />
//         </div>
//         <Cart
//           sendShowData={this.showdata}
//         />
//         <Categories />
//         <OnlineSuper />

//         <ExtraContentThree />
//         <Footer />
//       </section>
//     );
//   }
// }
// export default Home;
