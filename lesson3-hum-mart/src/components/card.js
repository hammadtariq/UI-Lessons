import React from "react";
import { List, Card, Button, message } from "antd";
import Header from "./Header";
class Cart extends React.Component {
  handleClick = (Id, Price) => {
    let newSum, newvalue,cartCounter;
     let cartCopy = this.props.data;
     cartCounter=this.props.cartItem.count;
     console.log(cartCopy)
      let cartItemCopy = this.props.cartItem;
      console.log(cartItemCopy)
          let newCartItem = cartCopy.value.find(ele => ele.id == Id);
        console.log(newCartItem,"newCartItem")
    if(this.props.cartItem.value.length >0){
      let cartflg = false; let i; 
        for( i=0;i<cartItemCopy.value.length;i++){
          if(newCartItem.id ===cartItemCopy.value[i].id){
            cartflg=true     
          }    
        }
        if(cartflg ===false){ 
          message.success("added");
          cartCounter +=1;
          newvalue=[...cartItemCopy.value,newCartItem];
          newSum=cartItemCopy.sum+Price
          this.props.addToCart(newvalue,newSum,cartCounter);    
        }
        else{
          cartflg=false;
          message.success("exist")
        }
        }
        else{
          cartCounter +=1;
           newvalue=[...cartItemCopy.value,newCartItem];
           newSum=cartItemCopy.sum+Price
          message.success("added")
          this.props.addToCart(newvalue,newSum,cartCounter);
        }
  };
  
  render() {
    console.log(this.props, "cart data");
    const { Meta } = Card;
    return (
      <div className="cardsliderP">
        <div className="mo">
          <h3>Mobile Phones</h3>
        </div>
        <div className="cardslider">
          <List
            itemLayout="horizontal"
            dataSource={this.props.data.value}
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
                        onClick={() => this.handleClick(item.id,item.price)}
                        //  onClick={()=>this.props.sendShowData(item.id,item.title,item.price,item.counter,item.Img)}
                        type="danger"
                      >
                        {item.content}
                      </Button>
                    </div>
                  </Card>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
export default Cart;
