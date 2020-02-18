import axios from "axios";

export const setTodoloading = () => {
  return {
    type: "todoloading"
  };
};

export const getTodo = () => dispatch => {
  debugger;
  dispatch(setTodoloading());
  axios.get("/api/todo").then(res =>
    dispatch({
      type: "gettodo",
      payload: res.data
    })
  );
};

export const deleteTodo = id =>{
  return async (dispatch, getState) => {
    axios.delete(`/api/todo/${id}`).then(res => {
      let temp = getState();
      debugger
      temp=temp.todo.todo.filter(item=>item._id!==id)
      dispatch({
        type: "deletetodo",
        payload: temp
      })
    });
  };
};

export const addtodo = todo => {
  return async (dispatch, getState) => {
    axios.post("/api/todo", todo).then(res => {
      const temp = getState();
      let newTodo = [...temp.todo.todo];
      newTodo = [...newTodo, res.data];
      dispatch({
        type: "addtodo",
        payload: newTodo
      });
    });
  };
};
