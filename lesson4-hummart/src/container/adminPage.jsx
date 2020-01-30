import React, { Component } from "react";
import Top from "../components/top";
import "../css/order.css";
import { Table } from "antd";

class Admin extends Component {
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
      }
    ];
    const dataSource = []
    this.props.checkOut.order.map(item=>
        dataSource.push({
        orderid:item.key,
        title:item.title,
        description:item.description,
        quantity:item.quantity
      }))
    return (
      <div>
        <Top />
        <div className="order">
          <h1>Order(s) Detail</h1>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
export default Admin;
