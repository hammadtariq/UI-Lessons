import React from "react";
import { Icon, Input } from "antd";

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
        <p>Zero 5</p>
        <Icon type="shopping-cart" />
      </div>
    );
  }
}
export default Header;
