import React,{Component} from 'react'
import {Icon} from 'antd'

class Top extends Component{
    render(){
        return(
            <div className="top">
          <div className="karachi">Delivering Only in Karachi</div>
          <div className="contact">
            <p>
            <span><Icon type="phone" />
              (021)111116278</span> <a href="/blank">Costumer Care</a>
              <a href="/blank">Login</a>
            </p>
          </div>
        </div>
        )
    }
}

export default Top;