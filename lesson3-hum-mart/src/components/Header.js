import React from "react";
import { Icon, Input, Badge } from "antd";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import "../App.css";
class Header extends React.Component {
  static getDerivedStateFromProps(
    nextProps,
    prevState = this.props.plusCounter(this.props)
  ) {
    console.log(nextProps, "nextProps");
    console.log(prevState, "prev stete cart");
  }
  handleShowDrawer = () => {
    this.props.showVisibility(this.props.visible);
  };
  handleAddToCounter = Id => {
    this.props.plusCounter(this.props.cartItem[Id]);
  };
  render() {
    console.log(this.props.cartItem, "show-card-provider");
    const { Search } = Input;
    return (
      <div className="logHeader" handleClose={this.onClose}>
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
        <p>Zero 5 </p>
        <div>
          {/* <Button type="primary" > */}
          <Badge
            count={this.props.count}
            showZero
            onClick={this.handleShowDrawer}
            //  onClick={this.props.showDrawer}
          >
            <a href="#" className="head-example" />
            <Icon type="shopping-cart" />
          </Badge>
          {/* </Button> */}
        </div>
        <div></div>
      </div>
    );
  }
}

export default Header;
