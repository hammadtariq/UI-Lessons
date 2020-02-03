import React, { Component } from "react";
import "antd/dist/antd.css";
import imgdiv2 from "../images/one.jpg";
// import imgdiv3 from "../images/three.jpg"
import imgdiv1 from "../images/on.jpg";
// import sliderProvider from "../providers/sliderProvider";
import { Carousel } from "antd";
import "../css/Maindiv.css";

class Slider extends Component {
  // state={
  //     list1: [imgdiv3, imgdiv3, imgdiv3, imgdiv3]
  // }

  render() {
    return <this.Slider />;
  }

  Slider = () => {
    return (
      <div className="div">
        <div className="Maindiv">
          <div id="newdiv">
            <div className="div2">
              <img id="sliderimg" src={this.props.leftImages[0]}></img>
            </div>

            <div className="div3">
              <img id="sliderimg" src={this.props.leftImages[1]}></img>
            </div>
          </div>
          <div className="div1">
            <Carousel autoplay>
              {this.props.SliderImages.map(items => {
                return (
                  <div>
                    <img id="sliderimg" src={items}></img>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  };
}
export default Slider;
