import React from "react";
import { Icon, Input, Badge ,AutoComplete} from "antd";
import { Form, message, Select } from "antd";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import "../App.css";
const { Option } = AutoComplete;
class Header extends React.Component {
  state = {
    value: '',
    temp:[],
    dataSource: [],
  };
  handleShowDrawer = () => {
    this.props.showVisibility(this.props.visible);
  };
  handleAddToCounter = Id => {
    this.props.plusCounter(this.props.cartItem[Id]);
  };
 
   onSelect=(value)=> {
    console.log('onSelect', value);
    let findItem = this.props.data.find((el)=>value==el.title)
    
    console.log(findItem,value)
    this.setState({
      temp:findItem
    })
  }
  handleClick=()=>{
    let findproduct = this.state.temp.id
    console.log(findproduct)
    console.log(this.state.temp.id,this.props)
    let searcflg=false;
    
      if(isNaN(findproduct)){
        console.log(isNaN(findproduct))
        searcflg=false;
       
      }
      else{
        console.log(isNaN(findproduct))
        console.log("not value")
        searcflg=true
       
      }
      if(searcflg==true){
 this.props.history.push({
          pathname:`/description/${this.state.temp.id}`
        })
      }
      else{
 this.props.history.push({
          pathname:"/default"
        })
      }
  
    
  }
  onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : this.props.data.map(el=>el.title),
    });
  };

  onChange = value => {
    this.setState({ value });
  };
  

  render() {
    console.log(this.props.cartItem, "show-card-provider");
    const { Search } = Input;
    const { Option } = Select;
    const { dataSource, value } = this.state;
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
        <div className="global-search-wrapper" style={{ width: 300 }}>
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        
        />
      <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                onClick={this.handleClick}
                type="primary"
              >
                <Icon type="search" />
              </Button>
      </div>
        <p>Zero 5 </p>
        <div>
          {/* <Button type="primary" > */}
          <Badge
            count={this.props.cartItem.count}
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
