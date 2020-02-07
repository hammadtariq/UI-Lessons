import { Drawer, Button,message } from "antd";
import React from "react";
import { Icon } from "antd";
class Drawers extends React.Component {
  onClose = () => {
    console.log(this.props);
    this.props.hidevisibility(this.props.visible);
  };
  handleAddToCounter = (Id,Price) => {
   let newSum = this.props.cartItem.sum;
   newSum +=Price
   let updateCartItem = this.props.cartItem.value.slice();
   const element = updateCartItem[Id];
   updateCartItem[Id] = {...element, counter: element.counter + 1,sum:element.sum+Price}
   this.props.plusCounter(updateCartItem,newSum)
      
  };
  handleSubToCounter = (Id,Price) => {
    let newSum = this.props.cartItem.sum;
    newSum -=Price
    let counterItem =this.props.cartItem.value[Id] ;
    if(counterItem.counter >0){
      let updateCartItem = this.props.cartItem.value.slice();
      const element = updateCartItem[Id];
      updateCartItem[Id] = {...element, counter: element.counter - 1,sum:element.sum-Price}
      this.props.minusCounter(updateCartItem,newSum)
    }
    else{
      message.warning("Kindly increase quantity")
    }
  };
  render() {
    console.log(this.props.visible);
    return (
      <div>
        <Drawer
          title="My Cart "
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.props.visible.visi}
        >
          <div className="total-bill">
            <div className="totalOne">
              <p>SubTotal</p>
              <p>Rs:{this.props.cartItem.sum}</p>
            </div>
            <div className="totalOne">
              <p>Delivery Charges?</p>
              <p>Free</p>
            </div>
          </div>
          {this.props.cartItem.loading == true ? (
            this.props.cartItem.value.map((elt, index) => {
              console.log(elt.id);
              return (
                <div className="drawer" key={elt.id}>
                  <div className="cart-item">
                    <div>
                      <img src={elt.Img} width="50px" height="50px"></img>
                    </div>
                    <div>
                      <h4>{elt.title}</h4>
                      <span className="counter-part">
                        <Icon
                          type="minus-circle"
                          // onClick={() => this.props.sendMinus(elt.id)}
                          onClick={() => this.handleSubToCounter(index,elt.price)}
                        />
                        <p>{elt.counter}</p>

                        <Icon
                          type="plus-circle"
                          // onClick={() => this.props.sendAdd(elt.id)}
                          onClick={() => this.handleAddToCounter(index,elt.price)}
                        />
                        <p>*</p>

                        <p>{elt.price}</p>
                        <p className="adb">{elt.sum}</p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>hsd</div>
          )}

          <Button type="danger" block className="drawer-button">
            Proceed To Checkout : {this.props.cartItem.sum}
          </Button>
        </Drawer>
      </div>
    );
  }
}
export default Drawers;
