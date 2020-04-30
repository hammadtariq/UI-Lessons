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
  handlePriceChange = (e,index) => {
    debugger;
    let r = this.state.myList;
    r[index].price = parseInt(e.target.value);
    this.setState({
      myList: r
    });
  };
  handleImageChange = (e,index) => {
    let r = this.state.myList;
    r[index].image = e.target.value;
    const a=typeof(r[index].image)
    alert(a)
    this.setState({
      myList: r
    });
  };
  handleTextChange = (e,index) => {
    debugger;
    let r = this.state.myList;
    r[index].text = e.target.value;
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
              onChange={(e)=>this.handleImageChange(e,this.state.Index)}
            />
            <Input
              value={this.state.myList[this.state.Index].text}
              onChange={(e)=>this.handleTextChange(e,this.state.Index)}
            />
            <Input
              value={this.state.myList[this.state.Index].price}
              onChange={(e)=>this.handlePriceChange(e,this.state.Index)}
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
