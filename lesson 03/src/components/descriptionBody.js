import React from "react";
import "antd/dist/antd.css";
import {  Input, Button,  Rate, Card,message,Tabs,Form } from "antd";
import { Link } from "react-router-dom";
import updateCount from "../action/Action";
const { TabPane } = Tabs;


class decriptionBody extends React.Component {
  updateCount = index => {
    new updateCount().updateCount(index, this.props);
    {message.success('Item Added')}

  };

  ReviewComponent=()=>{
    return(

<div
          style={{
            marginLeft: "8rem",
            marginTop: "3rem",
            marginBottom: "5rem"
          }}
        >
          <Tabs>
            <TabPane style={{ display: "flex" }} tab="MORE INFORMATION" key="1" >
              <strong style={{ width: "20%" }}>
                Brand
                <br />
                Sold By
                <br />
                Return Policy
                <br />
                Country of Manufacture
                <br />
                Warranty
                <br />
                Option
                <br />
                Express Shipping
              </strong>
              <p style={{ width: "50%" }}>
                { this.props.bodyObject.productImages[this.props.index].text}
                <br />
                Hummart
                <br />
                3 Days Return and Exchange
                <br />
                N/A
                <br />
                Not Applicable
                <br />
                32GB | 32GB
                <br />
                No
                <br />
              </p>
            </TabPane>
            <TabPane tab="REVIEWS" key="2">
              <h1 style={{color:"blue"}}>You Are Reviewing</h1>
              <h2 style={{color:"blue"}}>{this.props.bodyObject.productImages[this.props.index].text}</h2>
              <Form>
                <Form.Item required label="Rating">
                  <Rate />
                </Form.Item>
                <Form.Item required label="NickName">
                  <Input style={{ width: "60%" }} />
                </Form.Item>
                <Form.Item required label="Summary">
                  <Input style={{ width: "60%" }} />
                </Form.Item>
                <Form.Item required label="Review">
                  <Input style={{ width: "60%", height: "80px" }} />
                </Form.Item>
                <Button onClick={()=>message.success("Review Submit")} type="danger">SUBMIT REVIEW</Button>
              </Form>
            </TabPane>
          </Tabs>
        </div>

    )
  }



  render() {
    debugger
    return (
      <div
        style={{
        
          marginLeft: "7%",
          width: "85%",
          minheight: "800px"
        }}
      >
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop:"20px",
          width: "100%",
          height: "100%"
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
              cover={
                <img
                  src={
                    this.props.bodyObject.productImages[this.props.index].img
                  }
                />
              }
            >
              <Link to="/description">
                <label style={{cursor: "pointer"}}>
                  {this.props.bodyObject.productImages[this.props.index].text}
                </label>
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
            style={{ color:"black",fontSize:"20px",backgroundColor:"#e96125", marginLeft: "45px", width: "80%"  ,height:"40px"}}

          >
            Add To Cart
          </Button>
        </div>
        </div>
        <this.ReviewComponent/>

      </div>
    );
  }
}
export default decriptionBody;
