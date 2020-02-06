import React, { Component } from "react";
import Top from "../components/top";
import Footer from "../components/footer";
import "../css/order.css";
import { Table, Button, Icon } from "antd";

class Admin extends Component {

  render() {
    let b = Math.round(Math.random() * 100);
    const columns = [
      {
        title: "Orderid",
        dataIndex: "orderid",
        key: "orderid"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
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
    debugger;
    a.map((item, index) =>
      dataSource.push({
        orderid: item.id,
        name: "Abc",
        address:'L-10/16',
        delete: (
          <Button onClick={() => this.props.delete(index, a)} type="danger">
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
        <Footer />
      </div>
    );
  }
}
export default Admin;
