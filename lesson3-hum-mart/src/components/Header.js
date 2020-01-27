import React from "react";
import { Icon, Input, Badge } from "antd";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
class Header extends React.Component {
  
  render() {
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
          <Badge count={0} showZero onClick={this.props.showDrawer}>
            <a href="#" className="head-example" />
            <Icon type="shopping-cart" />
          </Badge>
          {/* </Button> */}
         
        </div>
      </div>
    );
  }
}
export default Header;
