import initState from "../appState/initState";

const RootReducers = (state = initState, action) => {
  // console.log(state, "init stete");
  // console.log(action, "actions");
  if (action.type === "SHOW_DRAWER") {
    console.log(action, "actions");
    return {
      ...state,
      visible: true
    };
  }
  if (action.type === "CLOSE_DRAWER") {
    console.log(action, "actions");
    return {
      ...state,
      visible: false
    };
  
  }
  if (action.type === "ADD_CART") {
    console.log(state.categoriesData[action.id].price,state.categoriesData[action.id].id);
    let cartCopy = [...state.categoriesData];
   
    let sumCopy =parseInt(state.sum);
    console.log(sumCopy)
    sumCopy = sumCopy+state.categoriesData[action.id].price;
    console.log(sumCopy,typeof sumCopy,"parseInt")
    
  
    console.log(action,"add to cart")
    let newCartItem = cartCopy.find(ele => ele.id == action.id);
    console.log(newCartItem);

    return {
      ...state,
      cartItem: [...state.cartItem, newCartItem]
      ,sum:sumCopy
    };
  }
  if(action.type === 'ADD_TO_COUNTER'){
 console.log(state.cartItem[action.id].id)
 console.log(action,state);
 const newCartItem =[...state.cartItem];
console.log(newCartItem)
 newCartItem.map((ele)=>{
   if(ele.id===action.id){
    let newCounter;
    newCounter= ele.counter = ele.counter+1
     console.log("match",newCounter)
     return{
       ...state,
       cartItem:[...state.cartItem,{counter:newCounter}]
     }
   }
 })
 

  console.log("new COunter");
   
  }
  return state;
};
export default RootReducers;
