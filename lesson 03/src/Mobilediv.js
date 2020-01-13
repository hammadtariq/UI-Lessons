import React from "react";
import "./Mobilediv.css";
import m1 from "./m1.jpg";
import m2 from "./m2.jpg";
import m3 from "./m3.jpg";
import m4 from "./m4.jpg";
import m5 from "./m5.jpg";
import Mybtn from "./Mybtn";

function Mobilediv() {
  return (
    <div className="parentdiv1">
      <div className="parentdiv">
        <div id="nd">
          <h1 className="mob">Mobile Phone</h1>
          <hr id="myline" />
        </div>

        <div className="Mobilediv">
          <div className="one">
            <img className="mobileimg" src={m1}></img>
            <span>
              <label>Samsung A7 (2018) | Blue | With Official Warranty</label>
              <br />
              <label id="mylabel">Rs 27,499</label>
              <Mybtn  />
            </span>
          </div>
          <div className="one">
            <img className="mobileimg" src={m2}></img>
            <Mybtn />
          </div>
          <div className="one">
            <img className="mobileimg" src={m3}></img>
            <Mybtn />
          </div>
          <div className="one">
            <img className="mobileimg" src={m4}></img>
            <Mybtn />
          </div>
        </div>
        <div id="nd">
          <h1 className="mob">Mobile Phone</h1>
          <hr id="myline" />
        </div>

        <div className="Mobilediv">
          <div className="one">
            <img className="mobileimg" src={m5}></img>
            <Mybtn />
          </div>
          <div className="one">
            <img className="mobileimg" src={m1}></img>
            <Mybtn />
          </div>
          <div className="one">
            <img className="mobileimg" src={m2}></img>
            <Mybtn />
          </div>
          <div className="one">
            <img className="mobileimg" src={m3}></img>
            <Mybtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilediv;
