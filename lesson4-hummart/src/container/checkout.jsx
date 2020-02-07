import Top from "../components/top";
import React from "react";
import { checkOut } from "../actions/actions";
import { Button } from "antd";

export default function checkout(props) {
  debugger;
  let b = Math.round(Math.random() * 100);
  let arr=[]
  arr.push(props.location.state.data)
  arr.push(b)
  return (
    <div>
      <Top />
      <h1>Your OrderId is : {b}</h1>
     <a href='/'> <Button type='primary' onClick={()=>checkOut(arr)}>Confirm CheckOut?</Button></a>
    </div>
  );
}
