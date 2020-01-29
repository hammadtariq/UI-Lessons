import appInitialState from "../App-Store/Initial-State";
import  audioList from "../reducers/rootReducer";

export default function reducer(state = appInitialState, action) {
  return {
    ...state,bodyObject: audioList(state.bodyObject, action),
  };
}
