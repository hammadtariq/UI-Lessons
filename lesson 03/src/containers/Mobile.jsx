import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function Mobile(props) {
  console.log(props);
  debugger;

  return (
    <div>
      <Header
      ResetProductImage={props.ResetProductImages}
        changeStateOfDrawer={props.changeStateOfDrawer}
        bodyObject={props.bodyObject}
        changeCount={props.changeCount}
        updateProductImagesCounter={props.updateProductImagesCounter}
      />

      <Menu
        GetSortedList={props.GetSortedList}
        CardImages={props.CardImages}
        MenuList={props.MenuList}
        updateCartList={props.updateCartList}
        changeCount={props.changeCount}
        bodyObject={props.bodyObject}
      />

      <Footer />
    </div>
  );
}

export default Mobile;
