import React, { Component } from "react";

const list = [
  'React','Redux'
];

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      list,
      var:'',
    };
  }

  onDismiss = () => {
    this.state.list.pop()
    var l=this.state.list
    this.setState({list:l})
  
  }

  Add = () => {
      this.state.list.push(this.state.var)
      const updated=this.state.list
     this.setState({list:updated})
    }

  onUpdate1=(event)=>{
    const changeValue=event.target.value
    this.setState({var:changeValue})
  }

  render(){
  return (
    <div className="App">
          <ul>
  {this.state.list.map((item)=>{
  return <li>{item}</li>
  })}
          </ul>
            
            <span>
              <input onChange={this.onUpdate1}  type='text'/>
              <button onClick={this.Add}>
                Add
              </button>
            </span>
            <span>
            <button onClick={this.onDismiss}>
                Delete
              </button>
            </span>
    </div>
  );
}
}

export default App;
