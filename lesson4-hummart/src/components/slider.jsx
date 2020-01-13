import React,{Component} from 'react'
import {Carousel} from 'antd'
import one from "../pictures/2020-web.jpg";
import two from "../pictures/prayer.jpg";
import three from "../pictures/price.jpg";


class Slider extends Component{
    render(){
        return(
            <div className="slider-parent">
          <div className="slider-main">
            <div className="left">
              <div className="left-top">
                <img
                  src={two}
                  alt="prayer-mat"
                  width="100%"
                  height="100%"
                ></img>
              </div>
              <div className="left-bottom">
                <img
                  src={three}
                  alt="prayer-mat"
                  width="100%"
                  height="100%"
                ></img>
              </div>
            </div>
            <div className="right">
              <Carousel className="slide" autoplay>
                <div>
                  <h1>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h1>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h3>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        )
    }
}

export default Slider;