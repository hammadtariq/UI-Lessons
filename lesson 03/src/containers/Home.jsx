import React, { Component } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

function Home(props) {
  
  debugger;
  return (
    <div className="app">
      <Header />
      <Slider SliderImages={props.myList} leftImages={props.leftImages} />
      <Body productImages={props.productImages} categoriesdiv={props.categoriesdiv} />
      <Footer />
    </div>
  );
}

export default Home;
