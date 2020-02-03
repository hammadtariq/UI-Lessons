import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge, Rate, Card } from "antd";
import { Link } from "react-router-dom";
import updateCount from "../action/Action";

class decriptionBody extends React.Component {
  updateCount = index => {
    new updateCount().updateCount(index, this.props);
  };

  render() {
    //   console.log(this.props.match.params)
      console.log(this.props.index)

      debugger
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "7%",
          width: "85%",
          height: "800px"
        }}
      >
        <div style={{ width: "40%", height: "75%" }}>
          <div
            style={{
              width: "100%"
            }}
          >
            <Card
              hoverable
              style={{ width: "100%", height: "10%" }}
              cover={<img src={this.props.bodyObject.productImages[this.props.index].img} />}
            >
              <Link to="/description">
                <label>{this.props.bodyObject.productImages[this.props.index].text}</label>
                <br />
              </Link>
            </Card>
          </div>
        </div>
        <div style={{ width: "35%", height: "75%" }}>
          <h2 style={{ margin: "45px" }}>
            {this.props.bodyObject.productImages[this.props.index].text}
          </h2>
          <h2 style={{ margin: "45px" }}>32GB | 32GB</h2>
          <Rate style={{ marginLeft: "45px" }} />

          <h1 style={{ margin: "45px" }}>
            RS {this.props.bodyObject.productImages[this.props.index].price}
          </h1>
          <Button
            onClick={() => this.updateCount(this.props.index)}
            style={{ marginLeft: "45px", width: "70%" }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    );
  }
}
export default decriptionBody;
