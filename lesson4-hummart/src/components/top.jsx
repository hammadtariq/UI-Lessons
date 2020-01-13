import React,{Component} from 'react'
import {Icon} from 'antd'

class Top extends Component{
    render(){
        return(
            <div className="top">
          <div className="karachi">Delivering Only in Karachi</div>
          <div className="contact">
            <p>
              <Icon type="phone" />
              (021)111116278 <a href="https://">Costumer Care</a>
              <a href="https://">Login</a>
            </p>
          </div>
        </div>
        )
    }
}

export default Top;