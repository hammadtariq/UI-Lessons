import React from "react";
import "antd/dist/antd.css";
import { Button, Icon, Card, message,Breadcrumb,Dropdown } from "antd";
import "../css/Menu.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import updateCount from "../action/Action";

const { Meta } = Card;

class MyMenu extends React.Component {
  render() {
    return (
      <div>
        <this.Sider />
      </div>
    );
  }

  GetSortedList=(myList)=>{
    debugger
    let list=[...myList]
    list.sort((a,b)=>(a.price>b.price)?1:-1)
    return ( this.props.GetSortedList(myList,list))

    

  }

  updateCount = index => {
    new updateCount().updateCount(index, this.props);
    {
      message.success("Item Added");
    }
  };

  Sider = () => {
    return (
      <div
        style={{
          marginLeft: "100px",
          width: "85%",
          height: "800px",
          display: "flex"
        }}
      >

        <div style={{ width: "45%" }} className="menuDiv">
          <Menu
            style={{ width: "100%" }}
            defaultSelectedKeys={["0"]}
            mode="inline"
          >
            {this.props.MenuList.map((item, index) => (
              <Menu.Item key={index}>{item}</Menu.Item>
            ))}
          </Menu>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{marginBottom:"10px", width: "85%", display:"flex",justifyContent:"space-between",marginLeft: "7%" }}>
        <div>
          <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <Icon type="home" />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/mobiles">
              <Icon type="user" />
              <span>Mobile</span>
            </Link>
          </Breadcrumb.Item>
          {/* <Link to="/description"> */}
            {/* <Breadcrumb.Item>Description</Breadcrumb.Item> */}
          {/* </Link> */}
        </Breadcrumb>
        </div>
        <div style={{ marginRight:"-70px"}}>
        <div className="dropdown">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        onClick={() => this.GetSortedList(this.props.CardImages)}
                        key="1"
                      >
                        Price
                      </Menu.Item>
                      <Menu.Item key="2">Product Name</Menu.Item>
                      <Menu.Item key="3">Position</Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Button>
                    Sort By <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
          </div>
      </div>
        <div style={{ width: "95%", height: "90%", backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* {this.props.CardImages.map((item, index) => ( */}
            {this.props.bodyObject.productImages.map((item, index) => (

              <div
                style={{
                  width: "200px"
                }}
              >
                <Card
                  hoverable
                  style={{ maxHeight:"100%", width: "100%" }}
                  cover={<img src={item.img} />}
                >
                  <Link
                    to={{
                      pathname: "/description",
                      state:  index 
                    }}
                  >
                    <p className="text-ellipse">{item.text}</p>
                    {/* <br /> */}
                    {/* <Meta title="RS" /> */}
                    <label>RS </label>
                    <label id="mylabel">{item.price}</label>
                  </Link>
                  <Button
                    style={{
                      width:"130px",

                      backgroundColor: "#e96125",
                      borderRadius: "20px",
                      float: "right"
                    }}
                    onClick={() => this.updateCount(index)}
                    id="btn"
                    type="danger"
                  >
                    Add To Cart
                  </Button>
                </Card>
              </div>
            ))}
            {/* {this.props.CardImages.map((item, index) => ( */}
            {this.props.bodyObject.productImages.map((item, index) => (

              <div
                style={{
                  width: "200px"
                }}
              >
                <Card
                  hoverable
                  style={{ width: "100%",maxHeight:"100%" }}
                  cover={<img src={item.img} />}
                >
                  <Link
                    to={{
                      pathname: "/description",
                      state:  index 
                    }}
                  >
                    <p className="text-ellipse">{item.text}</p>
                    {/* <br /> */}
                    <label>RS </label>
                    {/* <Meta title="Price" /> */}
                    <label id="mylabel">{item.price}</label>
                  </Link>
                  <Button
                    style={{
                      width:"130px",
                      backgroundColor: "#e96125",
                      borderRadius: "20px",
                      float: "right",
                    }}
                    onClick={() => this.updateCount(index)}
                    id="btn"
                    type="danger"
                  >
                    Add To Cart
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  };
}
export default MyMenu;
