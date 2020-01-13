import React from "react";
import "./Body.css";
import m1 from "./m1.jpg";
import m2 from "./m2.jpg";
import m3 from "./m3.jpg";
import m4 from "./m4.jpg";
import m5 from "./m5.jpg";
import Mybtn from "./Mybtn";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";

class Mybody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mobdiv: [
        {
          img: m1,
          price: "27,500",
          text: "Samsung A7 (2018) | Blue | With Official Warranty"
        },
        {
          img: m2,
          price: "27,500",
          text: "Samsung A7 (2018) | Blue | With Official Warranty"
        },
        {
          img: m3,
          price: "27,500",
          text: "Samsung A7 (2018) | Blue | With Official Warranty"
        },
        {
          img: m4,
          price: "27,500",

          text: "Samsung A7 (2018) | Blue | With Official Warranty"
        }
      ]
    };
  }

  updateCount = () => {
    console.log("Asd");
    let count = this.state.count;
    count = count + 1;
    this.setState({
      count: count
    });
  };

  render() {
    return (
      <div className="parentdiv1">
        <div className="parentdiv">
          <div id="nd">
            <h1 className="mob">Mobile Phone</h1>
            <hr id="myline" />
          </div>

          <div className="Mobilediv">
            {this.state.mobdiv.map(item => (
              <div className="one">
                <img className="mobileimg" src={item.img}></img>
                <span>
                  <label>{item.text}</label>
                  <br />
                  <label id="mylabel">{item.price}</label>
                  <Button onClick={this.updateCount} id="btn" type="danger">
                    Add To Cart
                  </Button>
                </span>
              </div>
            ))}
          </div>
          <div id="nd">
            <h1 className="mob">Mobile Phone</h1>
            <hr id="myline" />
          </div>

          <div className="Mobilediv">
            {this.state.mobdiv.map(item => (
              <div className="one">
                <img className="mobileimg" src={item.img}></img>

                <span>
                  <label>{item.text}</label>
                  <br />
                  <label id="mylabel">{item.price}</label>
                  <Button onClick={this.updateCount} id="btn" type="danger">
                    Add To Cart
                  </Button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Mybody;
