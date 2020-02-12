import appInitialState from "../App-Store/Initial-State";
import ReducerList from "../reducers/rootReducer";

export default function reducer(state = appInitialState, action) {
  localStorage.setItem("Store", state);
  
  return {
    
    ...state,
    bodyObject: ReducerList(state.bodyObject, action)
  };
}
