import React from "react";
import { Table, Modal, Button } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Dashborad extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  MyOrderDetails = props => {
    debugger;

    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {props.mydataArray.map(item => {
            return(
            <div>
              <span style ={{display:"flex", justifyContent:"space-around"}}>
              <p>{item.text}</p>
              <p>{item.counter}</p>
              </span>
            </div>);
          })}
        </Modal>
      </div>
    );
  };

  render() {
    const columns = [
      {
        title: "OrderId",
        dataIndex: "orderId",
        key: "OrderId"
      },
      {
        title: "Date",
        dataIndex: "Title",
        key: "Title"
      },
      {
        title: "Details",
        dataIndex: "Details",
        key: "Details"
      },
      {
        title: "Quantity",
        key: "Quantity",
        dataIndex: "Quantity"
      },
      {
        title: "Status",
        key: "Status",
        dataIndex: "Status"
      }
    ];

    let mydata = localStorage.getItem("testJSON");
    mydata = JSON.parse(mydata);
    console.log(mydata);
    const mydataArray = Object.values(mydata);

    const orderId = localStorage.getItem("myOrderId");
    const Title = Date();
    let Details;
    let Quantity = 0;
    let Status = "Active";

    for (let index = 0; index < mydataArray.length; index++) {
      Details = (
        <Button type="primary" onClick={this.showModal}>
          Details
        </Button>
      );
      Quantity += mydataArray[index].counter;
    }

    const dataSource = [{ orderId, Title, Details, Quantity, Status }];

    return (
      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "20px", color: "black" }}>OrderList</h1>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        {this.state.visible ? (
          <this.MyOrderDetails mydataArray={mydataArray} />
        ) : null}

        <Footer />
      </div>
    );
  }
}

export default Dashborad;
