import React from "react";
import "./Mybtn.css";
import "antd/dist/antd.css";
import { Input, Button, Icon, Badge } from "antd";



function Mybtn({abc}){
    return(
        <div className="Mybtndiv">
        <Button  id="btn" type="danger">ADD TO CART</Button>
        </div>
    )
}

export default Mybtn;