import React from 'react'
import './Logodiv.css'
import 'antd/dist/antd.css';
import { Drawer,Input,Button, Icon, Badge } from 'antd';
import myimg from '../src/Mylogo.png'








function Logodiv(props) {
    return (
        <div className="Logodiv">
            <div>
                <span className="items">
                    <div>
                        <img src={myimg}></img>
                    </div>
                    <div>
                        <span>

                    <Input id="abc"  placeholder="Basic usage" />
                    <Button id="bcd" type="danger">Search</Button>
                    </span>
                    </div>
                    <div> 
                    {/* <h1>Infinity</h1>  */}
                    <label id="mylabel">Infinity</label>
                     </div> 
                    
                    <div className="cartdiv">
                    <Badge count={0} showZero="true">
                    <Icon  className="mycart" type="shopping-cart" />
                    </Badge>
                    </div>
                </span>
            </div>
        </div>
    )

}









export default Logodiv;