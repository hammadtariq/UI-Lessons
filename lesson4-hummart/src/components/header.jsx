import React, {Component} from 'react'
import {Icon,Badge,Input} from 'antd'

const { Search } = Input;

class Header extends Component{
    render(){
        return(
            <div className="header">
          <p>
            <span className="h">H</span>
            <span className="um">um</span>
            <span className="ma">M</span>
            <span className="art">art</span>
          </p>
          <Search
            className="search"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <p>Infinix</p>
          <Badge
            onClick={this.props.Display}
            className="badge"
            count={this.props.count}
            showZero={this.props.showZero}
          >
            <Icon style={{ fontSize: "50px" }} type="shopping-cart" />
          </Badge>
        </div>
        )
    }
}

export default Header;