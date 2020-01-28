import React, { Component } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

function Home(props) {
  debugger;
  console.log(props)
  
  return (
    <div className="app">
      <Header  />
      <Slider SliderImages={props.myList} leftImages={props.leftImages} />
      {/* <Body  bodyObject={props.bodyObject}  changeCount={props.changeCount()} productImages={props.productImages} categoriesdiv={props.categoriesdiv} /> */}
      <Body changeCount={props.changeCount}  bodyObject={props.bodyObject}  />
      
      <Footer />
    </div>
  );
}

export default Home;
