import React from "react";
import { List, Card, Button } from "antd";
import Header from "./Header";
class Cart extends React.Component {
  handleClick = (Id,Price)=>{
   
    this.props.addtocart(this.props.data[Id].id,this.props.data[Id].price);
   console.log(this.props.addtocartcounter(),"add to cart counter")
   }
  render(){
 
  console.log(this.props,"cart data")
    const { Meta } = Card;
    return (
      <div className="cardsliderP">
        <div className="mo">
       
          <h3>Mobile Phones</h3>
        </div>
        <div className="cardslider">
          <List
            itemLayout="horizontal"
            dataSource={this.props.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <div className="cards">
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src={item.Img} />}
                  >
                    <Meta title={item.title} />
                    <div className="card-inner">
                      <p>Rs:{item.price}</p>
                      <Button
                      onClick={()=>this.handleClick(item.id,item.price)} 
                      //  onClick={()=>this.props.sendShowData(item.id,item.title,item.price,item.counter,item.Img)}
                      type="danger">{item.content}</Button>
                    </div>
                  </Card>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
}}
export default Cart;
