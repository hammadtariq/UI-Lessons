import { produce } from "immer";

const todoReducer = produce((draft, action) => {
  debugger;
  switch (action.type) {
    case "gettodo":
      draft.loading = false;
      draft.todo = action.payload;
      return;
    case "deletetodo":
      draft.todo = action.payload;
      return;
    case "addtodo":
      draft.todo = action.payload
      return;
    case "todoloading":
      draft.loading = true;
      return;
    default:
      return draft;
  }
});

export default todoReducer;
