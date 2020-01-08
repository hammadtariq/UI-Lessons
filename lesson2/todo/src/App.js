import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { List, Typography } from 'antd';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      lists: [
        {id: 1, listValue: "hello",flg:false },
        { id: 2, listValue: "pal" ,flg:false}
      ],
      content: "",
    
      val:"",
      toggle:false
    };
  }
  toggleEditState =(id)=>{
    console.log(id)
    this.state.lists.map(item=>{
      if(item.id==id){
        item.flg=true
        this.setState({val:item.listValue})
      }
      else{
        item.flg=false
      }
    })
    this.setState({
      toggle:!this.state.toggle,       
    })
    console.log(this.state.toggle)
  }
  handleChange(e) {
    this.setState({
      content: e.target.value
    });
    
  }
  handleSubmit(e) {
    e.preventDefault();
    let newId = (e.id = Math.floor(Math.random() * 20));
    console.log(e.id);
    console.log(e.listValue);
    const addContent = this.state.content;
    console.log(this.state.content);
    const lists = [...this.state.lists, { id: newId, listValue: addContent }];
    this.setState({
      lists,
     content:""
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
  this.setState({
    val:e.target.value,
  })
  
  console.log("onUpdateChange",this.state.edit)
  }
  editToDoHandler =(id)=>{
    const lists = [...this.state.lists]
    lists.map(list=>{
      if(list.id===id){
        list.listValue=this.state.val
        list.flg=true
      }
      this.setState({  lists,
         toggle:false,})
     
    })
  }   
  
  render() {
    const { lists,toggle } = this.state;
    return (
      <div className="parent">
  <h1>toDO </h1>
        <form onSubmit={this.handleSubmit} className="todo-form" id="create-course-form">
          <input type="text" onChange={this.handleChange} value={this.state.content}  />
          
          <input type="submit" value="submit" />
        </form> 
        <div className="list-item">
        {lists.map(list => {
          return (
            <section key={list.id} className="two"> 
                <div className="kole">
                   {( toggle && list.flg==true) ?(
                  <div className="pole">
                 
                    <input type="text" onChange={this.onUpdateChange} value={this.state.val} className="list-value"  />
                <button onClick={()=>this.editToDoHandler(list.id) } >save</button>
                
                  </div>
                ):(
                  <div className="one">
                     <p>{list.listValue} </p>
                    <div className="three">
                    <button onClick={()=>this.toggleEditState(list.id)}>edit</button>
                    <button type="button" onClick={() => this.deleteData(list.id)}>delete</button>
                    </div>
                  
                  </div>
                 
                ) } 
                </div>   
              
            </section>
          );
        })}
        </div>
      </div>
    );
  }
}

export default App;
