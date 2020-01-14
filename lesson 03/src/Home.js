import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";
import myimg from "../src/Mylogo.png";
import imgdiv2 from "./one.jpg";
import imgdiv3 from "./three.jpg";
import imgdiv1 from "./on.jpg";
import { Carousel } from "antd";
import m1 from "./m1.jpg";
import m2 from "./m2.jpg";
import m3 from "./m3.jpg";
import m4 from "./m4.jpg";
import m5 from "./m5.jpg";
import "./Product.css";

// import { Drawer, Button } from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartValue: 1,
      Total: 0,
      myCartList: [],
      visible: false,
      list1: [imgdiv3, imgdiv3, imgdiv3, imgdiv3],

      count: 0,
      mobdiv: [
        {
          img: m1,
          price: 10,
          text: "Samsung A7 (2018) | Blue | With Official Warranty",
          counter: 0
        },
        {
          img: m2,
          price: 20,
          text: "Samsung A7 (2018) | Blue | With Official Warranty",
          counter: 0
        },
        {
          img: m3,
          price: 30,
          text: "Samsung A7 (2018) | Blue | With Official Warranty",
          counter: 0
        },
        {
          img: m4,
          price: 40,
          text: "Samsung A7 (2018) | Blue | With Official Warranty",
          counter: 0
        }
      ]
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  Product = () => {
    return (
      <div className="p1">
        <div className="p2">
          <br />

          <div className="p3">
            <div className="p4">
              <div className="p41">
                <img id="p4img" src={m5}></img>
              </div>
              <div className="p41">
                <h1 id="p4h1">I am here</h1>
              </div>
              <div className="p41">
                <Icon
                  type="caret-right"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginTop: "55px",
                    marginLeft: "40px"
                  }}
                />
              </div>
            </div>
            <div className="p4"></div>
          </div>
          <br />

          <div className="p3">
            <div className="p4"></div>
            <div className="p4"></div>
          </div>
          <br />

          <div className="p3">
            <div className="p4"></div>
            <div className="p4"></div>
          </div>
          <br />
        </div>
      </div>
    );
  };

  Header = () => {
    return (
      <div className="Myheader">
        <p>Delivering Only in Karachi</p>
      </div>
    );
  };

  LoginHeader = () => {
    return (
      <div className="MyLoginheader">
        <span>
          <label>090078601</label>
          <label>Customer Care</label>
          <label>Login</label>
        </span>
      </div>
    );
  };

  Content = () => {
    return (
      <div id="contentdiv">
        <div className="C1">
          <h1 class="slider-header hard--bottom">
            Online Supermarket, Delivery in Karachi, Pakistan
          </h1>
          <p>
            Ever wondered of entering a grocery store and getting an overview of
            products sections and get to grab the required product from there?
            The alternate is our search bar of HumMart where you can search from
            a wide range of categories including grocery and staples, home
            furnishing, breakfast and dairy, instant foods, biscuits and snacks,
            beverages, household needs, personal care, home and kitchen, baby
            products, fruits and vegetables, ice creams and a lot more. Now with
            online phones and accessories purchase and with easy and timely home
            delivery all over Pakistan. The online shopping of grocery is a
            blessing to get the required products over a few clicks. We at
            HumMart provides our customers with the best deals to get value
            addition on the purchase of products available online as a bundle
            offer. If you are in a mood to mingle with friends but you got a
            grocery list in your pocket, just visit HumMart and order the
            grocery to get it delivered right at your home while you get
            yourself entertained with friends. Want to cook your favorite dish,
            no need to worry for the items to prepare a mouthwatering dish.
            HumMart offers you ample products to get the ingredients for the
            dish. We will provide you the products through express delivery
            within 2 hours. You have the independence to opt out from numerous
            products as HumMart focuses to bring utmost facilities through its
            online grocery store and adding value in life of our valued
            customers. You need to stay at your home, visit hummart.com through
            your laptop, smartphone or even from phone application.
          </p>
        </div>
      </div>
    );
  };

  Category = () => {
    return (
      <div className="Cat">
        <div className="Category">
          <span className="mylist">
            <a href="#">
              <li>Cloths</li>
            </a>
            <a href="#">
              <li>Laptop</li>
            </a>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Car</li>
            </a>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Laptop</li>
            </a>
            <a href="#">
              <li>Laptop</li>
            </a>
            <a href="#">
              <li>Laptop</li>
            </a>
          </span>
        </div>
      </div>
    );
  };

  updateCount = index => {
    let count = this.state.count;
    let mytotal = this.state.Total + this.state.mobdiv[index].price;

    // this.setState({
    //   Total:mytotal
    // })

    count = count + 1;
    this.setState({
      count: count
    });

    let list = this.state.mobdiv[index];
    list.counter = 1;
    let list2 = this.state.myCartList;
    list2.push(list);

    this.setState({
      myCartList: list2,
      Total: mytotal
    });

    // console.log(this.state.Total)
  };

  Body = () => {
    return (
      <div className="parentdiv1">
        <div className="parentdiv">
          <div id="nd">
            <h1 className="mob">Mobile Phone</h1>
            <hr id="myline" />
          </div>

          <div className="Mobilediv">
            {this.state.mobdiv.map((item, index) => {
              return (
                <div className="one">
                  <img className="mobileimg" src={item.img}></img>
                  <span>
                    <label>{item.text}</label>
                    <br />
                    <label id="mylabel">{item.price}</label>
                    <Button
                      onClick={() => this.updateCount(index)}
                      id="btn"
                      type="danger"
                    >
                      Add To Cart
                    </Button>
                  </span>
                </div>
              );
            })}
          </div>
          <div id="nd">
            <h1 className="mob">Mobile Phone</h1>
            <hr id="myline" />
          </div>

          <div className="Mobilediv">
            {this.state.mobdiv.map((item, index) => {
              return (
                <div className="one">
                  <img className="mobileimg" src={item.img}></img>
                  <span>
                    <label>{item.text}</label>
                    <br />
                    <label id="mylabel">{item.price}</label>
                    <Button
                      onClick={() => this.updateCount(index)}
                      id="btn"
                      type="danger"
                    >
                      Add To Cart
                    </Button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  Slider = () => {
    return (
      <div className="div">
        <div className="Maindiv">
          <div id="newdiv">
            <div className="div2">
              <img id="sliderimg" src={imgdiv1}></img>
            </div>

            <div className="div3">
              <img id="sliderimg" src={imgdiv2}></img>
            </div>
          </div>
          <div className="div1">
            <Carousel autoplay>
              {this.state.list1.map(items => {
                return (
                  <div>
                    <img id="sliderimg" src={items}></img>
                  </div>
                );
              })}
            </Carousel>
          </div>
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
              <img src={myimg}></img>
            </div>
            <div>
              <span>
                <Input id="abc" placeholder="Basic usage" />
                <Button id="bcd" type="danger">
                  Search
                </Button>
              </span>
            </div>
            <div>
              {/* <h1>Infinity</h1>  */}
              <label id="mylabel">Infinity</label>
            </div>

            <div className="cartdiv">
              <Badge count={this.state.count} showZero="true">
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
  Footer = () => {
    return (
      <div className="Footer">
        <div className="pdiv">
          <div className="Fdiv1">
            <div>
              <h1>Hummart</h1>
            </div>
            <ul>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <Link to={"/Footer"}>About Us</Link>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="Fdiv1">
            <div>
              <h1>Hummart</h1>
            </div>
            <ul>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="Fdiv1">
            <div>
              <h1>Contact Information</h1>
            </div>
            <ul>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="Fdiv1">
            <div>
              <h1>MOBILE APPS</h1>
            </div>
            <ul>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <Icon type="caret-right" style={{ color: "white" }} />
              </li>
              <li>
                <Icon type="caret-right" style={{ color: "white" }} />
                <Icon type="caret-right" style={{ color: "white" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  CartMinus = (index) => {

    let count = this.state.count;
    count=count-1;

    let list = [...this.state.myCartList];
    list[index].counter -= 1;
     list.splice(index, 1);
    this.setState({
      myCartList: list,
      count:count
    });


    

  };
  Cartadd = index => {
    let count = this.state.count;
    count=count+1;

    let list = [...this.state.myCartList];

    list[index].counter += 1;

    this.setState({
      myCartList: list,
      count:count
    });

    console.log(this.state.myCartList)
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
        visible={this.state.visible}
      >
        <div id="drawerdiv">
          <span>
            <label id="l1">SubTotal</label>

            <label id="l2">Rs {this.state.Total}</label>
          </span>
          <br />
          <span>
            <label id="l1">Delievery Charges</label>
            <label id="l2">Free</label>
          </span>
          <br />
          <br />

          <div className="dd1">
            {this.state.myCartList.map((items, index) => {
              return (
                <div>
                  <div key={Date.now()} id="cartdiv">
                    <div className="p41">
                      <img id="p4img" src={items.img} />
                    </div>
                    <div className="p41">
                      <label>src={items.text}</label>
                    </div>
                    <div className="p41">
                      <label>Rs {items.price} </label>
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
                <Link to={"/Header"}>
                  <Button style={{ width: "100%" }} type="danger">
                    Submit
                  </Button>
                </Link>
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
        <this.Slider />
        <this.Body />
        <this.Product />
        <this.Content />
        <this.Footer />
      </div>
    );
  }
}
export default Home;
