import React, { Component } from "react";
import { Icon, Badge, AutoComplete } from "antd";
import { Link, Redirect } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
    this.Data = this.Data.bind(this);
  }
  Data(e) {
    let c;
    for(let i =0;i<this.props.props.mobilecat.length;i++){
      if(e===this.props.props.mobilecat[i].title){
        c=`/mobiles/${i}`
        this.setState({redirect:c})
      }
    }
  }

  render() {
    let arr=this.props.props.mobilecat.map(item=>item.title)

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
          onSelect={this.Data}
          className="search"
          placeholder="input search text"
          enterButton="Search"
          size="large"
          dataSource={arr}
        />
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
