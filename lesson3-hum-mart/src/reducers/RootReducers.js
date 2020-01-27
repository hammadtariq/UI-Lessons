import initState from '../appState/initState'
const RootReducers = (state = initState,action)=>{
  console.log(state,"init stete")
    return state;
}
export default RootReducers;