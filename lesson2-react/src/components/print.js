import React, { Component } from "react";

function Print(props) {
  
    return (
      <div>
        <ul>
          {props.value.map(item => {
            return <li>{item.toUpperCase()}</li>;
          })}
        </ul>
        <span>
          <input onChange={props.onChange} type="text" />
          <button onClick={props.onClick}>Add</button>
          <button onClick={props.delete}>Delete</button>
        </span>
      </div>
    );
  }

export default Print;
