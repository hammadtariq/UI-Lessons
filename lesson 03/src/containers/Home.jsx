import React, { Component } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

function Home(props) {
  debugger;
  console.log(props);

  return (
    <div className="app">
      <Header
      ResetProductImage={props.ResetProductImages}
        updateProductImagesCounter={props.updateProductImagesCounter}
        changeStateOfDrawer={props.changeStateOfDrawer}
        bodyObject={props.bodyObject}
        changeCount={props.changeCount}
        updateCartList={props.updateCartList}

      />
      <Slider SliderImages={props.myList} leftImages={props.leftImages} />
      <Body
        updateCartList={props.updateCartList}
        changeCount={props.changeCount}
        bodyObject={props.bodyObject}
      />
      <Footer />
    </div>
  );
}

export default Home;
