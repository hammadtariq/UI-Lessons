import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  // componentDidMount() {debugger
  //   window.addEventListener("scroll", this.props.scroll(window.scrollY));
  // }

  // componentWillMount() {
  //   window.removeEventListener("scroll", this.props.scroll(window.scrollY));
  // }

  render() {
    return (
      <div className="nav">
        <div className={this.props.style}>
          <Link to="/mobiles">MOBILES TABLES & LAPTOPS</Link>
          <Link to="/blank">ELECTRONIC ACCESORIES</Link>
          <Link to="/blank">PHARMACY</Link>
          <Link to="/blank">NOODLES SAUCES & FROZEN FOODS</Link>
          <Link to="/blank">HOUSEHOLD NEEDS</Link>
          <Link to="/blank">BABY & KIDS</Link>
          <Link to="/blank">MOBILES TABLES & LAPTOPS</Link>
          <Link to="/blank">MORE</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
