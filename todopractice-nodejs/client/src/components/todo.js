import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getTodo, deleteTodo, addtodo } from "../actions/todoActions";

class Todo extends Component {
  componentDidMount() {
    debugger;
    this.props.getTodo();
  }

  render() {
    const { todo } = this.props.todo;
    const handleDelete = id => {
      debugger;
      this.props.deleteTodo(id);
    };
    const handleAddtodo = e => {
      debugger;
      const todo1 = prompt("Enter New Todo");
      let newTodo = {
        name: todo1
      };
      //newTodo={...todo,newTodo}
      this.props.addtodo(newTodo);
    };
    debugger;
    return (
      <div
        style={{
          margin: "10px",
          border: "2px solid #ec"
        }}
      >
        <Button
          variant="primary"
          style={{ margin: "10px" }}
          onClick={handleAddtodo}
        >
          Add Todo
        </Button>
        <Table hover responsive striped bordered>
          <tbody>
            {todo.length > 0
              ? todo.map(item => {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>
                        <Button variant='dark' onClick={()=>handleDelete(item._id)}>
                          Delete Todo
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data"}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapSatetoProps = state => ({
  todo: state.todo
});
export default connect(mapSatetoProps, { getTodo, deleteTodo, addtodo })(Todo);
