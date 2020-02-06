import React from "react";
import { Table, Divider, Tag } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Dashborad extends React.Component {
  render() {
    const columns = [
      {
        title: "OrderId",
        dataIndex: "orderId",
        key: "OrderId"
      },
      {
        title: "Title",
        dataIndex: "Title",
        key: "Title"
      },
      {
        title: "Description",
        dataIndex: "Description",
        key: "Description"
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

    

    const data = [
      {
        key: "1",
        orderId: "John Brown",
        Title: 32,
        Quantity: 1,
        Description: "New York No. 1 Lake Park",
        Status: ["nice", "developer"]
      },
      {
        key: "2",
        orderId: "John Brown",
        Title: 32,
        Quantity: 1,
        Description: "New York No. 1 Lake Park",
        Status: ["nice", "developer"]
      }
    ];

    let mydata = localStorage.getItem("testJSON");
    alert(mydata);
    mydata = JSON.parse(mydata);
    console.log(mydata);
    const mydataArray = Object.values(mydata);

    //  mydataArray.map(item=>
    //     dataSource.push({
    //         orderId: item.key,
    //         Title: "Mobile",
    //         Description: item.text,
    //         Quantity: item.counter,
    //         Status:"Active"
    //     })
    //     )
    const orderId=localStorage.getItem("myOrderId")
    const Title= "Mobile"
     let Description= ""
     let Quantity= []
     let Status= "Active"

    for (let index = 0; index < mydataArray.length; index++) {
        Description+= mydataArray[index].text + " " 
        Quantity[index]= mydataArray[index].counter
    }
   
    debugger

    const dataSource = [{orderId,Title,Description,Quantity,Status}];

    debugger;

    return (
      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ marginTop: "20px", color: "black" }}>OrderList</h1>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        <Footer />
      </div>
    );
  }
}

export default Dashborad;
