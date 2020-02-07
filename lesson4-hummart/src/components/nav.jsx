import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { style: "nav-again", visible: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll(window.scrollY));
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll(window.scrollY));
  }

  handleScroll(arg) {
    debugger;
    if (arg >= 177) {
      this.setState({ visible: true });
    }
  }

  render() {
    return (
      <div className="nav">
        <div className={this.state.visible ? "nav-again" : "nav-div"}>
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
