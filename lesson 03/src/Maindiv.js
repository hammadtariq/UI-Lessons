import React from "react";
import "./Maindiv.css";
import imgdiv2 from "./one.jpg";
import imgdiv3 from "./three.jpg";
import imgdiv1 from "./on.jpg";
import { Carousel } from "antd";

class Maindiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: [imgdiv3, imgdiv3, imgdiv3, imgdiv3]
    };
  }
  render() {
    return (
      <div className="div">
        <div className="Maindiv">
          <div id="newdiv">
            <div className="div2">
              <img id="sliderimg" src={imgdiv1}></img>
            </div>

            <div className="div3">
              <img id="sliderimg" src={imgdiv2}></img>
            </div>
          </div>
          <div className="div1">
            <Carousel autoplay>
              {this.state.list1.map(items => {
                return(
                <div>
                  <img id="sliderimg" src={items}></img>
                </div>
               ) })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}



export default Maindiv;
