import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu"


function Mobile(props) {
    console.log(props)
    debugger
  
     
  return (
    <div >
      <Header 
      
       changeStateOfDrawer={props.changeStateOfDrawer}
       bodyObject={props.bodyObject}
      
      />
      <Menu CardImages={props.CardImages} MenuList={props.MenuList} />
      <Footer />
    </div>
  );
}

export default Mobile;
