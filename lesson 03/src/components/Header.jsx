import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";
import myimg from "../images/Mylogo.png";
import '../css/Logodiv.css'
import '../css/LoginHeader.css'
import '../css/Category.css'
import "../css/Header.css"
import "../css/App.css"


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Total: 0,
            myCartList: [],
            visible: false,

            count: 0,
            categoryItem: ["MOBILES TABLETS & LAPTOPS", "ELECTRONIC ACCESSORIESPHARMACY", "NOODLES SAUCES & FROZEN FOODS", "HOUSEHOLD NEEDSBABY & KIDSMORE"]
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


    Header = () => {
        return (
            <div className="Myheader">
                <p>Delivering Only in Karachi1</p><br />
                <hr style={{ color: "green", height: "20px" }} />
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



    Category = () => {
        return (
            <div className="Cat">
                <div className="Category">
                    <span className="mylist">
                        {this.state.categoryItem.map((item) =>
                            <a href="#">
                                <li>{item}</li>
                            </a>
                        )}

                    </span>
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
