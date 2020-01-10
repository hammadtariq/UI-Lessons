import React from 'react';
import {Carousel} from 'antd';
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg';
import five from '../assets/five.PNG';
import six from '../assets/six.PNG';
const Slider = props =>(
    <div className="parent">
    <div className="slideOne">
      <div className="advOne">
        <img src={five} height="192px" width="100%"/>
      </div>
      <div className="advTwo">
        <img src={six} height="192px" width="100%" />
      </div>
    </div>
    <div className="slideTwo">
    <Carousel autoplay>
<div>
<img src={two}  height="388px" width="100%"/>
</div>
<div>
<img src={three} height="388px" width="100%"/>
</div>
<div>
<img src={four}height="388px" width="100%"/>
</div>

</Carousel> 
    </div>
  </div>
)
export default Slider;