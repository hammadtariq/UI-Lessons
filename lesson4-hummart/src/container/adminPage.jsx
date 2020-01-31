import React, { Component } from "react";
import Top from "../components/top";
import Footer from "../components/footer"
import "../css/order.css";
import { Table, Button, Icon } from "antd";

class Admin extends Component {
  delete(index) {
    //dataSource.splice(index, 1);
    debugger;
    //localStorage.setItem("orders", JSON.stringify(dataSource));
  }
  render() {
    const columns = [
      {
        title: "Orderid",
        dataIndex: "orderid",
        key: "orderid"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description"
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity"
      },
      {
        title: "Delete",
        dataIndex: "delete",
        key: "delete"
      }
    ];

    let dataSource = [];
    let a = localStorage.getItem("orders");
    a = JSON.parse(a);
    let b = Math.round(Math.random() * 100);
    a.map((item, index) =>
      dataSource.push({
        orderid: b,
        title: item.title,
        description: item.description,
        quantity: item.quantity,
        delete: (
          <Button
            onClick={() => this.props.delete(index, a)}
            type="danger"
          >
            <Icon type="delete" />
          </Button>
        )
      })
    );
    return (
      <div>
        <Top />
        <div className="order">
          <h1>Order(s) Detail</h1>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        <Footer/>
      </div>
    );
  }
}
export default Admin;
