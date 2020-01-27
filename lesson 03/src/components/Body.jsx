import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import "../css/Mobilediv.css";
import "../css/Product.css";
import '../css/Product.css';
import "../css/Content.css"


class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Total: 0,
            myCartList: [],
            visible: false,
           
            count: 0,
            
        };
    }



    Product = () => {
        return (
            <div className="p1">
                <div className="p2">
                    <br />
                    {this.props.categoriesdiv.map((item) =>
                        <div className="p3">
                            <div className="p4">
                                <div className="p41">
                                    <img id="p4img" src={item.img}></img>
                                </div>
                                <div className="p41">
                                    <h1 id="p4h1">{item.text}</h1>
                                </div>
                                <div className="p41">
                                <Link to="/mobiles">    <Icon
                                        type="caret-right"
                                        style={{
                                            color: "black",
                                            fontSize: "20px",
                                            marginTop: "55px",
                                            marginLeft: "40px"
                                        }}
                                    />
                                    </Link>
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
                    )}
                    <br />

                </div>
            </div>

        )
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
        let count = this.state.count;
        let mytotal = this.state.Total + this.state.mobdiv[index].price;

        this.setState({
            Total: mytotal
        })

        count = count + 1;
        this.setState({
            count: count
        });



        let list = this.state.mobdiv[index];
        list.counter += 1;
        if (this.state.myCartList.length === 0) {
            let list2 = [...this.state.myCartList];
            list2.push(list);
            this.setState({
                myCartList: list2,
            });
        }
        else {
            let myVar = false;
            let p = this.state.mobdiv[index].key
            for (let i = 0; i < this.state.myCartList.length; i++) {
                if (this.state.myCartList[i].key === p) {
                    this.setState({
                        counter: list.counter,
                    });
                    myVar = true
                    return;
                }
            }
            if (myVar === false) {
                let list2 = [...this.state.myCartList];
                list2.push(list);
                this.setState({
                    myCartList: list2,
                });
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
                        {this.props.productImages.map((item, index) => {
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
                        {this.props.productImages.map((item, index) => {
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






    CartMinus = (index) => {

        let count = this.state.count;
        count = count - 1;

        let mytotal = this.state.Total - this.state.myCartList[index].price;


        let list = [...this.state.myCartList];

        list[index].counter -= 1;
        if (list[index].counter === 0) {

            list.splice(index, 1);
            this.setState({
                myCartList: list,
                count: count,
                Total: mytotal
            });
        } else {
            this.setState({
                myCartList: list,
                count: count,
                Total: mytotal
            });
        }



    };
    Cartadd = index => {
        let count = this.state.count;
        count = count + 1;
        let mytotal = this.state.Total + this.state.myCartList[index].price;
        this.setState({
            count: count,
            Total: mytotal
        });
        let list = this.state.myCartList[index];
        list.counter += 1;

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
                                    <div key={index} id="cartdiv">
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
                                {/* <Link to={"/Header"}> */}
                                <Button style={{ width: "100%" }} type="danger">
                                    Submit
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
                <this.Body />
                <this.Product />
                <this.Content />
            </div>
        );
    }
}
export default Body;
