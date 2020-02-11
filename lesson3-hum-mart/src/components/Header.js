import React from "react";
import { Icon, Input, Badge, AutoComplete } from "antd";
import { Form, message, Select } from "antd";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import "../App.css";
const { Option } = AutoComplete;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      temp: [],
      dataSource: [],
      checkFlg: false
    };
  }

  handleShowDrawer = () => {
    this.props.showVisibility(this.props.visible);
  };
  handleAddToCounter = Id => {
    this.props.plusCounter(this.props.cartItem[Id]);
  };

  onSelect = value => {
    console.log("onSelect", value);
    let findItem = this.props.data.find(el => value == el.title);
    let checkItem = this.props.data;
    for (let i = 0; i < checkItem.length; i++) {
      if (findItem.id == checkItem[i].id) {
        console.log(findItem.id == checkItem[i].id);
        this.setState({
          temp: findItem,
          checkFlg: true
        });
        break;
      } else {
        this.setState({
          temp: [],
          checkFlg: false
        });
      }
    }
    console.log(findItem, value);
  };
  onChange = value => {
    this.setState({ value });
    console.log(this.state.value);
  };
  handleClick = () => {
    console.log(this.state.temp, this.state.value);
    let findProductId = this.props.data.find(
      fp => this.state.value == fp.title
    );
    console.log(findProductId);
    if (findProductId) {
      let searcflg = false;
      let ditem = this.props.data;
      for (let i = 0; i < ditem.length; i++) {
        console.log(findProductId.id, ditem[i].id);
        if (findProductId.id === ditem[i].id) {
          this.setState({ checkFlg: true });
          searcflg = true;
          break;
        } else {
          searcflg = false;
          this.setState({ checkFlg: false });
        }
      }
      if (this.state.checkFlg == true || searcflg == true) {
        this.props.history.push({
          pathname: `/description/${findProductId.id}`
        });
      } else {
        this.props.history.push({
          pathname: "/default"
        });
      }
    } else {
      this.props.history.push({
        pathname: "/default"
      });
    }
  };
  onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : this.props.data.map(el => el.title)
    });
  };

  render() {
    console.log(this.props.cartItem, "show-card-provider");
    const { Search } = Input;
    const { Option } = Select;
    const { dataSource, value } = this.state;
    return (
      <div className="logHeader" handleClose={this.onClose}>
        <p>
          <Link to="/">
            <span className="logoOne">
              H<span className="logoSizeOne">um</span>
            </span>
            <span className="logoTwo">
              M<span className="logoSizeTwo">art</span>
            </span>
          </Link>
        </p>
        <div className="global-search-wrapper" style={{ width: 350 }}>
          <AutoComplete
            value={value}
            dataSource={dataSource}
            style={{ width: 280 }}
            onSelect={this.onSelect}
            onSearch={this.onSearch}
            onChange={this.onChange}
            placeholder="Search entire store here..."
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <Button
            className="search-btn"
            style={{ marginRight: -12 }}
            onClick={this.handleClick}
            type="primary"
          >
            {/* <Icon type="search" /> */}
            <b>Search</b>
          </Button>
        </div>
        <p>Zero 5 </p>
        <div>
          
          <Badge
            count={this.props.cartItem.count}
            showZero
            onClick={this.handleShowDrawer}
           
          >
            <a href="#" className="head-example" />
            <Icon type="shopping-cart" className="cart-icon"/>
          </Badge>
         
        </div>
        <div></div>
      </div>
    );
  }
}

export default Header;
