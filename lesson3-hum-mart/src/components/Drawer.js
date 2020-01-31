import { Drawer, Button } from "antd";
import React from "react";
import { Icon } from "antd";
class Drawers extends React.Component {
 
  
  onClose = () => {
    console.log(this.props)
    this.props.hidevisibility(this.props.visible)
  };
  handleAddToCounter = (Id)=>{
    console.log(this.props.cartItem,typeof Id,Id)
    // this.props.plusCounter(this.props.cartItem[Id].id)
    this.props.plusCounter(Id)
    // this.props.addtocart(this.props.data[Id].id,this.props.data[Id].price);
  }
  handleSubToCounter = (Id)=>{
    this.props.minusCounter(this.props.cartItem[Id].id)
  }
  render() {
    console.log(this.props.visible)
    return (
      <div>
       
         <Drawer
          title="My Cart "
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.props.visible}
        >
          <div className="total-bill">
            <div className="totalOne">
              <p >SubTotal</p>
    <p>Rs:{this.props.sum}</p>
            </div>
            <div className="totalOne">
              <p>Delivery Charges?</p>
              <p>Free</p>
            </div>
          </div>
          { 
          this.props.visible ?
          (this.props.cartItem.map((elt,index) => {
            console.log(elt.id)
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
                        onClick={()=>this.handleSubToCounter(elt.id)}
                      />
                      <p>{elt.counter}</p>
                     
                      <Icon
                        type="plus-circle"
                        // onClick={() => this.props.sendAdd(elt.id)}
                        onClick={()=>this.handleAddToCounter(index)}
                      />
                      <p>*</p>
                     
            <p>{elt.price}</p>
            <p className="adb">{elt.price}</p>
                    </span>
                  </div>{" "}
                </div>
              </div>
            );
          })):(
            <div>hsd</div>
          )
          }

          <Button type="danger" block className="drawer-button">
            Proceed To Checkout : {this.props.sum}
          </Button>
        </Drawer>
      </div>
    );
  }
}
export default Drawers;
