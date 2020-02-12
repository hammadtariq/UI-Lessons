import React from "react";
import { Table, Modal, Button, Input } from "antd";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Store extends React.Component {
  state = {
    visible: false,
    Index: 0,
    myList: this.props.Store.productImages,
    // myList:localStorage.getItem("store")
  };

  showModal = index => {
    console.log(this.state)
    this.setState({
      visible: true,
      Index: index
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
  handlePriceChange = e => {
    debugger;
    let r = this.state.myList;
    r[0].price = parseInt(e.target.value);
    this.setState({
      myList: r
    });
  };
  handleImageChange = e => {
    let r = this.state.myList;
    r[0].image = e.target.value;
    this.setState({
      myList: r
    });
  };
  handleTextChange = e => {
    debugger;
    let r = this.state.myList;
    r[0].text = e.target.value;
    this.setState({
      myList: r
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
          <div>
            <Input
              value={this.state.myList[this.state.Index].img}
              onChange={this.handleImageChange}
            />
            <Input
              value={this.state.myList[this.state.Index].text}
              onChange={this.handleTextChange}
            />
            <Input
              value={this.state.myList[this.state.Index].price}
              onChange={this.handlePriceChange}
            />
          </div>
        </Modal>
      </div>
    );
  };

  render() {
    const columns = [
      {
        title: "Image",
        dataIndex: "Image",
        key: "Image"
      },
      {
        title: "Price",
        dataIndex: "Price",
        key: "Price"
      },
      {
        title: "Text",
        dataIndex: "Text",
        key: "Text"
      },
      {
        title: "Edit",
        dataIndex: "Edit",
        key: "Edit"
      }
    ];
    debugger;

    let Image = "Asd";
    let Price = 0;
    let Text = "Active";
    let Edit;
    const dataSource = [];
    // [{ Image, Price, Text,Edit }];

    console.log(this.props.Store.productImages.length);
    for (
      let index = 0;
      index < this.props.Store.productImages.length;
      index++
    ) {
      Image = this.state.myList[index].img;
      Price = this.state.myList[index].price;
      Text = this.state.myList[index].text;
      Edit = (
        <Button type="primary" onClick={() => this.showModal(index)}>
          Edit
        </Button>
      );
      dataSource.push({ Image, Price, Text, Edit });
    }

    return (
      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "20px", color: "black" }}>OrderList</h1>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        {this.state.visible ? (
          <this.MyOrderDetails dataSource={dataSource} />
        ) : null}
        <Link to="/">
          <Button>See Changes</Button>
        </Link>
      </div>
    );
  }
}

export default Store;
