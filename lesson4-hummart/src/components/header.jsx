import React, { Component } from "react";
import { Icon, Badge, AutoComplete, Input, Button } from "antd";
import { Link, Redirect } from "react-router-dom";

const { Search } = Input;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      value: null
    };
    this.Data = this.Data.bind(this);
    this.Change = this.Change.bind(this);
  }
  Change(e) {
    this.setState({ value: e });
  }
  Data() {
    let c;
    for (let i = 0; i < this.props.props.mobilecat.length; i++) {
      if (this.state.value === this.props.props.mobilecat[i].title) {
        c = `/mobiles/${i}`;
        this.setState({ redirect: c });
      }
    }
  }

  render() {
    let arr = this.props.props.mobilecat.map(item => item.title);

    return (
      <div className="header">
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
        <Link to="/">
          <p>
            <span className="h">H</span>
            <span className="um">um</span>
            <span className="ma">M</span>
            <span className="art">art</span>
          </p>
        </Link>
        <AutoComplete
          onChange={this.Change}
          className="global-search"
          size="large"
          style={{ marginTop: "1rem", width: "50%" }}
          dataSource={arr}
          placeholder="Search entire store here..."
          filterOption={(inputValue, option) =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !==-1
          }
        >
          <Input
            suffix={
              <Button
                onClick={this.Data}
                className="search-btn"
                style={{
                  marginRight: -12,
                  backgroundColor: "#e96125",
                  color: "white"
                }}
                size="large"
              >
                Search
              </Button>
            }
          />
        </AutoComplete>
   
        <p>Infinix</p>
        <Badge
          onClick={this.props.Display}
          className="badge"
          count={this.props.count}
          showZero={this.props.showZero}
        >
          <Icon
            style={{ fontSize: "50px", marginBottom: "1rem" }}
            type="shopping-cart"
          />
        </Badge>
      </div>
    );
  }
}

export default Header;
