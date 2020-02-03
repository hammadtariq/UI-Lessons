import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";
import myimg from "../images/Mylogo.png";
import { Link } from "react-router-dom";
import "../css/Logodiv.css";
import "../css/LoginHeader.css";
import "../css/Category.css";
import "../css/Header.css";
import "../css/App.css";
import updateCount from "../action/Action";

class Header extends React.Component {
  state = {
    categoryItem: [
      {
        myLink: "MOBILES TABLETS & LAPTOPS",
        myLinkTo: "/mobiles"
      },
      {
        myLink: "ELECTRONIC ACCESSORIESPHARMACY",
        myLinkTo: "/"
      },
      {
        myLink: "NOODLES SAUCES & FROZEN FOODS",
        myLinkTo: "/"
      },
      { myLink: "HOUSEHOLD NEEDSBABY & KIDSMORE", myLinkTo: "/" }
    ]
  };
  submitted = () => {};

  showDrawer = () => {
    {
      this.props.changeStateOfDrawer(true);
    }
  };

  onClose = () => {
    {
      this.props.changeStateOfDrawer(false);
    }
  };

  Header = () => {
    return (
      <div className="Myheader">
        <p>Delivering Only in Karachi1</p>
        <br />
        <hr style={{ color: "green", height: "20px" }} />
      </div>
    );
  };

  LoginHeader = () => {
    return (
      <div style={{ backgroundColor: "#f9f9f9" }} className="MyLoginheader">
        <span>
          <label>090078601</label>
          <Link to="/">
            <label style={{ color: "black" }}>Customer Care</label>
          </Link>
          {/* <label>Login</label> */}
        </span>
      </div>
    );
  };

  Category = () => {
    return (
      <div className="Cat">
        <div className="Category">
          <span className="mylist">
            {this.state.categoryItem.map(item => (
              <Link to={item.myLinkTo}>
                <li>{item.myLink}</li>
              </Link>
            ))}
          </span>
        </div>
      </div>
    );
  };

  LogoDiv = () => {
    return (
      <div className="Logodiv">
        <div>
          <span className="items">
            <div>
              <Link to="/">
                <img src={myimg}></img>
              </Link>
            </div>
            <div>
              <span>
                <Input
                  style={{ backgroundColor: "#f9f9f9", width: "500px" }}
                  id="abc"
                  placeholder="Basic usage"
                />
                <Button  id="bcd" type="danger">
                  Search
                </Button>
              </span>
            </div>
            <div>
              {/* <h1>Infinity</h1>  */}
              <label id="mylabel">Infinity</label>
            </div>

            <div className="cartdiv">
              <Badge count={this.props.bodyObject.count} showZero="true">
                <Icon
                  onClick={this.showDrawer}
                  className="mycart"
                  type="shopping-cart"
                />
              </Badge>
            </div>
          </span>
        </div>
      </div>
    );
  };

  CartMinus = index => {
    new updateCount().CartMinus(index, this.props);
  };
  Cartadd = index => {
    new updateCount().Cartadd(index, this.props);
  };

  Drawer = () => {
    return (
      <Drawer
        width={500}
        id="Mydrawer"
        title="My Cart"
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={this.props.bodyObject.visible}
      >
        <div id="drawerdiv">
          <span>
            <label id="l1">SubTotal</label>

            <label id="l2">Rs {this.props.bodyObject.Total}</label>
          </span>
          <br />
          <span>
            <label id="l1">Delievery Charges</label>
            <label id="l2">Free</label>
          </span>
          <br />
          <br />

          <div className="dd1">
            {this.props.bodyObject.myCartList.map((items, index) => {
              return (
                <div>
                  <div key={index} id="cartdiv">
                    <div className="p41">
                      <img id="p4img" src={items.img} />
                    </div>
                    <div className="p41">
                      <label>src={items.text}</label>
                    </div>
                    <div className="p41">
                      <label>Rs {items.price * items.counter} </label>
                    </div>
                  </div>

                  <div>
                    <span id="spanbtn">
                      <Button
                        onClick={() => this.CartMinus(index)}
                        shape="circle"
                      >
                        -
                      </Button>
                      <p>{items.counter}</p>
                      <Button
                        onClick={() => this.Cartadd(index)}
                        shape="circle"
                      >
                        +
                      </Button>
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="Drawarbtn">
              <div>
                {/* <Link to={"/Header"}> */}
                <Button
                  onClick={this.submitted}
                  style={{ width: "100%" }}
                  type="danger"
                >
                  {this.props.bodyObject.myCartList.length === 0
                    ? "Shop Now"
                    : "Submit"}
                  {/* Submit */}
                </Button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    );
  };

  render() {
    return (
      <div>
        <this.Header />
        <this.LoginHeader />
        <this.LogoDiv />
        <this.Drawer />
        <this.Category />
      </div>
    );
  }
}
export default Header;
