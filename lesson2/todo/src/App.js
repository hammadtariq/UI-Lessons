import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      lists: [
        {
          id: 1,
          listValue: "hello"
        }
      ],
      content: "",
      edit:false
    };
  }
  toggleEditState =()=>{
    this.setState({
      edit:!this.state.edit
    })
  }
  handleChange(e) {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let newId = (e.id = Math.random() * 20);
    console.log(e.id);
    console.log(e.listValue);
    const addContent = this.state.content;
    console.log(this.state.content);
    const lists = [...this.state.lists, { id: newId, listValue: addContent }];
    this.setState({
      lists
    });
    console.log(lists);
  }
  deleteData(addid) {
    console.log(addid);
    const updatedList = this.state.lists.filter(list => {
      return list.id !== addid;
    });
    console.log(updatedList);
    this.setState({
      lists: updatedList
    });
  }
  onUpdateChange =(e)=>{
  console.log(e.target.value);
  
  }
  editToDoHandler =(id,val)=>{
console.log(id,val)
    this.state.lists.map(list=>
      console.log(list.listValue)
      )

  }
      
  
  render() {
    const { lists } = this.state;
    return (
      <div>
        <h1>toDO</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
        
        {lists.map(list => {
          return (
            <ul key={list.id}>
              <li>
                {list.listValue}
                <button type="button" onClick={() => this.deleteData(list.id)}>
                  delete
                </button>
                <input type="text" onChange={this.onUpdateChange} />
                <button onClick={()=>this.editToDoHandler(list.id,list.listValue)}>Edit</button> 
                
               
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
