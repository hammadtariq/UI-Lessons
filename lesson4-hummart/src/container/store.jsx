import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Table, Rate, Icon, Button, Modal } from "antd";
import Top from "../components/top";
class Store extends Component {
  state = {
    dataitem: [],
    visible: false,
    editedData: [],
    originalData: null,
    index: null,
    items: null,
    name: null
  };

  handleOk = () => {
    let arr = [...this.state.originalData];
    let val;
    arr.splice(this.state.index, 1, this.state.dataitem);
    this.setState({ visible: false, originalData: arr });
    if (this.state.name === "mobiles") {
      debugger;
      val = { ...this.state.items };
      val.Mobiledata = this.state.originalData;
      this.setState({ items: val });
    } else if (this.state.name === "offers") {
      val = { ...this.state.items };
      val.offers = this.state.originalData;
      this.setState({ items: val });
    } else {
      val = { ...this.state.items };
      val.mobilesCategory = this.state.originalData;
      this.setState({ items: val });
    }
    this.props.store(this.state.items);
  };

  change = e => {
    let data = this.state.dataitem;
    data.title = e.target.value;
    this.setState({ dataitem: data });
  };
  change1 = e => {
    let data = this.state.dataitem;
    data.description = e.target.value;
    this.setState({ dataitem: data });
  };
  change2 = e => {
    let data = this.state.dataitem;
    data.price = e.target.value;
    this.setState({ dataitem: data });
  };
  change3 = e => {
    let data = this.state.dataitem;
    data.stars = e.target.value;
    this.setState({ dataitem: data });
  };

  handleEdit = (name, data, d, i) => {
    this.setState({
      name,
      items: data,
      visible: true,
      dataitem: d[i],
      originalData: d,
      index: i
    });
  };

  render() {
    const columns = [
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
        title: "Price",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "Stars",
        dataIndex: "stars",
        key: "stars"
      },
      {
        title: "Edit",
        dataIndex: "edit",
        key: "edit"
      }
    ];

    const data = [];
    const data1 = [];
    const data2 = [];
    this.props.item.Mobiledata.map((item, index) =>
      data.push({
        title: item.title,
        description: item.description,
        price: item.price,
        stars: <Rate disabled defaultValue={item.stars} />,
        edit: (
          <Button
            onClick={() =>
              this.handleEdit(
                "mobiles",
                this.props.item,
                this.props.item.Mobiledata,
                index
              )
            }
          >
            <Icon type="edit" />
          </Button>
        )
      })
    );
    this.props.item.offers.map((item, index) =>
      data1.push({
        title: item.title,
        description: item.description,
        price: item.price,
        stars: <Rate disabled defaultValue={item.stars} />,
        edit: (
          <Button
            onClick={() =>
              this.handleEdit(
                "offers",
                this.props.item,
                this.props.item.offers,
                index
              )
            }
          >
            <Icon type="edit" />
          </Button>
        )
      })
    );
    this.props.item.mobilesCategory.map((item, index) =>
      data2.push({
        title: item.title,
        description: item.description,
        price: item.price,
        stars: <Rate disabled defaultValue={item.stars} />,
        edit: (
          <Button
            onClick={() =>
              this.handleEdit(
                "mobilecategory",
                this.props.item,
                this.props.item.mobilesCategory,
                index
              )
            }
          >
            <Icon type="edit" />
          </Button>
        )
      })
    );
    return (
      <div>
        <Modal
          title="Items Detail"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={() => this.setState({ visible: false })}
        >
          <input onChange={this.change} value={this.state.dataitem.title} />
          <input
            onChange={this.change1}
            value={this.state.dataitem.description}
          />
          <input onChange={this.change2} value={this.state.dataitem.price} />
          <input onChange={this.change3} value={this.state.dataitem.stars} />
        </Modal>
        <Top />
        <Link to='/'>Mobiles Home Page</Link>
        <Table columns={columns} dataSource={data} />
        <Link to='/'>Offers </Link>
        <Table columns={columns} dataSource={data1} />
        <Link to='/'>Mobiles Categories Page</Link>
        <Table columns={columns} dataSource={data2} />
      </div>
    );
  }
}
export default Store;
