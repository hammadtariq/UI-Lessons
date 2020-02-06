import React from "react";
import { List, Card, Button, message } from "antd";
import Header from "./Header";
class Cart extends React.Component {
  handleClick = (Id, Price) => {
 
    let ownIndex ;let newPrice;let newSum;
    let newvalue
     let cartCopy = this.props.data;
     console.log(cartCopy)
        //  let sumCopy = parseInt(this.props.sum);
        //  sumCopy = sumCopy + this.props.data[Id].price;
         let cartItemCopy = this.props.cartItem;
         console.log(cartItemCopy)
          let newCartItem = cartCopy.value.find(ele => ele.id == Id);
        console.log(newCartItem,"newCartItem")
    //  console.log(cartItemCopy,"cartCopy");
    if(this.props.cartItem.value.length >0){
      let cartflg = false; let i; 
        for( i=0;i<cartItemCopy.value.length;i++){
          if(newCartItem.id ===cartItemCopy.value[i].id){
          
           cartflg=true     
          }
          // nIndex =cartItemCopy.value.length;
        }
        if(cartflg ===false){
         
          // nIndex=ownIndex;
          // ownIndex=parseInt(nIndex) ;
         
          message.success("added");
          newvalue=[...cartItemCopy.value,newCartItem];
          newSum=cartItemCopy.sum+Price
          this.props.addToCart(newvalue,newSum);
         
        }
        else{
          cartflg=false;
          message.success("exist")
        }
        }
        else{
         
           newvalue=[...cartItemCopy.value,newCartItem];
           newSum=cartItemCopy.sum+Price
          
          message.success("added")
          this.props.addToCart(newvalue,newSum);
        }
  
    console.log(cartItemCopy)
       
         
          console.log(this.props.cartItem,cartItemCopy);
      
     
     
    // console.log(this.props.addtocartcounter(), "add to cart counter");
    console.log(this.props)
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
