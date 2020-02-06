import React from "react";
import { Icon, Input, Badge } from "antd";
import { Form, message, Select } from "antd";
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
  handleSearch = (val)=>{
    console.log(val)
  }
  render() {
    console.log(this.props.cartItem, "show-card-provider");
    const { Search } = Input;
    const { Option } = Select;
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
        {/* <Search
          size="large"
          placeholder="enter"
          enterButton="Search"
          onSearch={this.props.data.value.map(ele=>ele.title)}
          className="searchInput"
       
        >
          
        </Search> */}
         <Form.Item
          // className="searchInput"
          // validateStatus={recipients.validateStatus}
          // help={recipients.errorMsg}
        >
          
            <Select mode="tags" tokenSeparators={[","]} placeholder="Email an">
              {this.props.data.map((d, i) => <Option key={i}>{d.title}</Option>)}       
              {console.log(this.props.data.map (ele=>ele.title))}
            </Select>
         
        </Form.Item>
       
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
