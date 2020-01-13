import React from "react";
import "./Categoriesdiv.css";
import c1 from "./cell.jpg";
import "antd/dist/antd.css";
import { Input, Button, Icon, Badge } from "antd";

function Categoriesdiv() {
  return (
    <div className="Catdiv1">

      <div className="heading">
      <h2>Categories</h2>
      
        <div className="block1">
          <div>
            <img src={c1}></img>
          </div>

          <div>
            <h2>Mobiles, Tablets &amp; Laptops</h2>
            <h3>Mobile</h3>
          </div>

          <div>
            <Icon type="caret-right" style={{ color: "black" }} />
          </div>
        </div>
        <div className="block1">
          <div>
            <img src={c1}></img>
          </div>

          <div>
            <h2>Mobiles, Tablets &amp; Laptops</h2>
            <h3>Mobile</h3>
          </div>

          <div>
            <Icon type="caret-right" style={{ color: "black" }} />
          </div>
        </div>
        </div>
        
    </div>
  );
}
export default Categoriesdiv;
