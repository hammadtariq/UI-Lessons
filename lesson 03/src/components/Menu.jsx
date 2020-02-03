import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge, Card, message } from "antd";
import "../css/Menu.css";
import { Menu } from "antd";
import m2 from "../images/m1.jpg";
import { Pagination } from "antd";
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
          // backgroundColor: "black",
          display: "flex"
        }}
      >
        <div style={{ width: "25%" }} className="menuDiv">
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
        <div style={{ width: "75%", height: "80%", backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {this.props.CardImages.map((item, index) => (
              <div
                style={{
                  width: "200px"
                }}
              >
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={<img src={item.img} />}
                >
                  <Link
                    to={{
                      pathname: "/description",
                      state: { index }
                    }}
                  >
                    <label>{item.text}</label>
                    <br />
                    {/* <Meta title="RS" /> */}
                    <label>RS </label>
                    <label id="mylabel">{item.price}</label>
                  </Link>
                  <Button
                    style={{
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
            {this.props.CardImages.map((item, index) => (
              <div
                style={{
                  width: "200px"
                }}
              >
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={<img src={item.img} />}
                >
                  <Link
                    to={{
                      pathname: "/description",
                      state: { index }
                    }}
                  >
                    <label>{item.text}</label>
                    <br />
                    <label>RS </label>
                    {/* <Meta title="Price" /> */}
                    <label id="mylabel">{item.price}</label>
                  </Link>
                  <Button
                    style={{
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
          </div>
        </div>
      </div>
    );
  };
}
export default MyMenu;
