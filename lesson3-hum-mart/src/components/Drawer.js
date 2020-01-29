import { Drawer, Button } from "antd";
import React from "react";
import { Icon } from "antd";
class Drawers extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    // this.state = { visible: true };
  }
  //   showDrawer = () => {
  //     this.setState({
  //       visible: true
  //     });
  //   };

  //   onClose = () => {
  //     this.setState({
  //       visible: false
  //     });
  //   };

  render() {
    return (
      <div>
        <Drawer
          title="My Cart "
          placement="right"
          closable={false}
          onClose={this.props.onClose}
          visible={this.props.visible}
        >
          <div className="total-bill">
            <div className="totalOne">
              <p>SubTotal</p>
              {/* <p>Rs:{this.props.showCartData.price}</p> */}
            </div>
            <div className="totalOne">
              <p>Delivery Charges?</p>
              <p>Free</p>
            </div>
          </div>
          {/* {this.props.showCartData.map(elt => {
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
                        onClick={() => this.props.sendMinus(elt.id)}
                      />
                      <p>{elt.counter}</p>

                      <Icon
                        type="plus-circle"
                        onClick={() => this.props.sendAdd(elt.id)}
                      />
                      <p>{elt.price}</p>
                    </span>
                  </div>{" "}
                </div>
              </div>
            );
          })} */}

          <Button type="danger" block>
            Proceed To Checkout
          </Button>
        </Drawer>
      </div>
    );
  }
}
export default Drawers;
