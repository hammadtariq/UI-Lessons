import initState from "../appState/initState";

const RootReducers = (state = initState, action) => {
  console.log(state, "init stete");
  console.log(action, "actions");
  if (action.type === "SHOW_DRAWER") {
    console.log(action, "actions");
    return {
      ...state,
      visible: true
    };
  }
  if(action.type ==='CLOSE_DRAWER'){
    console.log(action, "actions");
    return{
      ...state,
      visible:false
    }
    console.log(action, "actions");
  }
if(action.type==='ADD_CART'){
  console.log(state.data[action.id].id)
  let cartCopy = [...state.data];
console.log(cartCopy)
  let newCartItem =cartCopy.find(ele=>ele.id==action.id);
 console.log(newCartItem)
 return{
   ...state,
   cartItem:[...state.cartItem,newCartItem]
 }
}
  return state;
};
export default RootReducers;
