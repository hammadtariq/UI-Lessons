import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Discription(props) {
 
  return (
    <div className="app">
      <Header
        changeStateOfDrawer={props.changeStateOfDrawer}
        bodyObject={props.bodyObject}
        changeCount={props.changeCount}
      />
      <Footer />
    </div>
  );
}

export default Discription;
