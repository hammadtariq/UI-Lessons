import React, { Component } from "react";
import Top from "../components/top";
import Footer from "../components/footer";
import "../css/order.css";
import { Table, Button, Icon, Modal } from "antd";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, detail: "No Data" };
  }

  showModal = des => {
    debugger;
    let data='';
    for(let i=0;i<des.length;i++){
      data=data+"  "+des[i].title
    }
    this.setState({
      visible: true,
      detail: data
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  render() {
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
        title: "Status",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "Delete",
        dataIndex: "delete",
        key: "delete"
      },
      {
        title: "Detail",
        dataIndex: "detail",
        key: "detail"
      }
    ];
    let dataSource = [];
    let a = localStorage.getItem("orders");
    a = JSON.parse(a);
    debugger;
    if (a.length>0){
    let des = a[0].totall;
    a.map((item, index) =>
      dataSource.push({
        orderid: item.id,
        name: "Abc",
        address: "L-10/16",
        status: "Active",
        delete: (
          <Button onClick={() => this.props.delete(index, a)} type="danger">
            <Icon type="delete" />
          </Button>
        ),
        detail: <Button onClick={() => this.showModal(des)}>Detail</Button>
      })
    );
  }
    // des = des.map(item => item);
    return (
      <div>
        <Top />
        <div className="order">
          <h1>Order(s) Detail</h1>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        <Footer />
        <Modal
          title="Detail"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <p>{this.state.detail}</p>
        </Modal>
      </div>
    );
  }
}
export default Admin;
