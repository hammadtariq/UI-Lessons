import appInitialState from "../App-Store/Initial-State";


export default function reducer(state = appInitialState, action) {
  if(action.type==="changeCount"){
    console.log("action.payload", action.payload)
    return {...state, count: action.payload}
    
  }
  return state;
}