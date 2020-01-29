import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import "../css/Mobilediv.css";
import "../css/Product.css";
import "../css/Product.css";
import "../css/Content.css";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // myCartList: [],
    };
  }

  Product = () => {
    return (
      <div className="p1">
        <div className="p2">
          <br />
          {this.props.bodyObject.categoriesdiv.map(item => (
            <div className="p3">
              <div className="p4">
                <div className="p41">
                  <img id="p4img" src={item.img}></img>
                </div>
                <div className="p41">
                  <h1 id="p4h1">{item.text}</h1>
                </div>
                <div className="p41" >
                  <Link   to="/mobiles">
                    {" "}
                    <Icon
                      type="caret-right"
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginTop: "55px",
                        marginLeft: "40px"
                      }}
                    />
                  </Link >
                </div>
              </div>
              <div className="p4">
                <div className="p41">
                  <img id="p4img" src={item.img}></img>
                </div>
                <div className="p41">
                  <h1 id="p4h1">{item.text}</h1>
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
            </div>
          ))}
          <br />
        </div>
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

  updateCount = index => {
    let count = this.props.bodyObject.count;
    debugger;
    let mytotal = this.props.bodyObject.Total + this.props.bodyObject.productImages[index].price;
    count = count + 1;
    debugger;
    {this.props.changeCount(count,mytotal)}
    debugger;
    console.log(this.props.bodyObject.count);

    let list = this.props.bodyObject.productImages[index];
    list.counter += 1;
    if (this.props.bodyObject.myCartList.length === 0) {
      let list2 = this.props.bodyObject.myCartList;
      list2.push(list);
      this.props.updateCartList(list2)
    } else {
      let myVar = false;
      let p =this.props.bodyObject.productImages[index].key;
      for (let i = 0; i < this.props.bodyObject.myCartList.length; i++) {
        if (this.props.bodyObject.myCartList[i].key === p) {
          this.setState({
            counter: list.counter
          });
          myVar = true;
          return;
        }
      }
      if (myVar === false) {
        let list2 = this.props.bodyObject.myCartList;
        list2.push(list);
        this.props.updateCartList(list2)

      }
    }
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
            {this.props.bodyObject.productImages.map((item, index) => {
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
            {this.props.bodyObject.productImages.map((item, index) => {
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

  
  render() {
    return (
      <div>
        <this.Body />
        <this.Product />
        <this.Content />
      </div>
    );
  }
}
export default Body;
