import React from "react";
import { Icon, Input, Badge } from "antd";
import { Drawer, Button } from "antd";

// import Drawer from './Drawer';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
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
 
  render() {
    const { Search } = Input;
    return (
      <div className="logHeader">
        <p>
          <span className="logoOne">
    H<span className="logoSizeOne">{this.props.cartData}</span>
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
        <p>Zero 5 </p>

        <div>
          {/* <Button type="primary" > */}
          <Badge count={0} showZero onClick={this.showDrawer}>
            <a href="#" className="head-example" />
            <Icon type="shopping-cart" />
          </Badge>
          {/* </Button> */}
          <Drawer
            title="My Cart "
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            {this.props.showCartData.map((elt)=>{
              return(
            <div
             key={elt.id}>
            <h4>{elt.title}</h4>
             <div className="cart-item"><Icon type="minus-circle" /><p>{this.props.sendCount}</p><Icon type="plus-circle" onClick={()=>this.props.sendAdd(elt.id)}/> <p>{elt.price}</p></div>
            </div>
              )
            })}
  
            <Button type="danger" block></Button>
          </Drawer>
        </div>
      </div>
    );
  }
}
export default Header;
