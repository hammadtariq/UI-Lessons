import todoReducer from "./todoReducer";
const initState = {
  todo: [],
  loading: false
};

export default function rootReducer(state = initState, action) {
  return {
    todo: todoReducer(state, action)
  };
}
