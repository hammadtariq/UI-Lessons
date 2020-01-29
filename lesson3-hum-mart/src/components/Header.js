import React from "react";
import { Icon, Input, Badge } from "antd";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
class Header extends React.Component {
  handleShowDrawer = ()=>{
    debugger;
    this.props.showVisibility(this.props.visible)
  }
 
  onClose = () => {
    this.props.hidevisibility(this.props.visible)
  };
  
  render() {
    console.log(this.props.cartItem,"show-card-provider")
    const { Search } = Input;
    return (
      <div className="logHeader">
        <p>
          <span className="logoOne">
            H<span className="logoSizeOne">um</span>
          </span>
          <span className="logoTwo">
            M<span className="logoSizeTwo">art</span>
          </span>
        </p>
        <Search
          size="large"
          placeholder="input search text"
          enterButton="Search"
          onSearch={value => console.log(value)}
          className="searchInput"
        />
        <Link to="/descriptionmeal">
        <p>Zero 5 </p>
        </Link>
       

        <div>
          {/* <Button type="primary" > */}
          <Badge count={0} showZero
          onClick={this.handleShowDrawer}
          //  onClick={this.props.showDrawer}
           >
            <a href="#" className="head-example" />
            <Icon type="shopping-cart" />
          </Badge>
          {/* </Button> */}
         
        </div>
        <div>
        <Drawer
          title="My Cart "
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.props.visible}
        >
          <div className="total-bill">
            <div className="totalOne">
              <p >SubTotal</p>
              {/* <p>Rs:{this.props.cartItem}</p> */}
            </div>
            <div className="totalOne">
              <p>Delivery Charges?</p>
              <p>Free</p>
            </div>
          </div>
          {this.props.cartItem.map(elt => {
            return (
              <div className="drawer" key={elt.id}>
                <div className="cart-item">
                  <div>
                    <img src={elt.Img} width="50px" height="50px"></img>
                  </div>
                  <div>
                    <h4>{elt.title}</h4>
                    <span className="counter-part">
                      <Icon
                        type="minus-circle"
                        onClick={() => this.props.sendMinus(elt.id)}
                      />
                      <p>{elt.counter}</p>

                      <Icon
                        type="plus-circle"
                        onClick={() => this.props.sendAdd(elt.id)}
                      />
                      <p>{elt.price}</p>
                    </span>
                  </div>{" "}
                </div>
              </div>
            );
          })}

          <Button type="danger" block>
            Proceed To Checkout
          </Button>
        </Drawer>
      </div>
      </div>
    );
  }
}
export default Header;
