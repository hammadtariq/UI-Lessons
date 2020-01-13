import React, { Component } from "react";



class Nav extends Component {


  render() {
    return (
      <div className="nav">
        <div className={this.props.style}>
          <a href="./App.jsx">MOBILES TABLES & LAPTOPS</a>
          <a href="./App.jsx">ELECTRONIC ACCESORIES</a>
          <a href="./App.jsx">PHARMACY</a>
          <a href="./App.jsx">NOODLES SAUCES & FROZEN FOODS</a>
          <a href="./App.jsx">HOUSEHOLD NEEDS</a>
          <a href="./App.jsx">BABY & KIDS</a>
          <a href="./App.jsx">MOBILES TABLES & LAPTOPS</a>
          <a href="./App.jsx">MORE</a>
        </div>
      </div>
    );
  }
  
}

export default Nav;
