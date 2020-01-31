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
    // console.log(action, "actions");
    return {
      ...state,
      visible: false
    };
  }
  if (action.type === "ADD_CART") {
    // console.log(
    //   state.categoriesData[action.id].price,
    //   state.categoriesData[action.id].id
    // );
    let cartCopy = [...state.categoriesData];

    let sumCopy = parseInt(state.sum);
    // console.log(sumCopy);
    sumCopy = sumCopy + state.categoriesData[action.id].price;
    // console.log(sumCopy, typeof sumCopy, "parseInt");

    // console.log(action, "add to cart");
   let cartItemCopy = [...state.cartItem]
  
   let sendcart;
     let newCartItem = cartCopy.find(ele => ele.id == action.id);
   console.log(newCartItem.id,"newCartItem")
console.log(cartItemCopy,"cartCopy");
 cartItemCopy.map((newitem)=>{
  if(newCartItem.id===newitem.id){
    return alert("already exist")
  }
  else{
    return newCartItem
  }
})
   
    return {
      ...state,
      cartItem: [...state.cartItem, newCartItem],
      sum: sumCopy
    };
  }
  if (action.type === "ADD_TO_COUNTER") {
    let newCounter;
    let newPrice = 0;
    console.log(state.cartItem[action.id].id);
    console.log(action.id);
    const newCartItem = [...state.cartItem];
    console.log(newCartItem);
    let sumCopy = parseInt(state.sum);
    console.log(sumCopy);
    sumCopy = sumCopy + newCartItem[action.id].price;
    console.log(sumCopy, typeof sumCopy, "parseInt");
    newCartItem.map((ele,index) => {
      if (index == action.id) {
        newCounter = ele.counter = ele.counter + 1;
        newPrice = ele.price = ele.price*newCounter;
        console.log("match", newCounter);
      }
    });

    return {
      ...state,
      cartItem: [...newCartItem],
      sum: sumCopy
    };
  }
  if (action.type === "SUB_TO_COUNTER") {
    let newCounter;
    let newPrice = 0;
    console.log(state.cartItem[action.id].id);
    console.log(action.id);
    const newCartItem = [...state.cartItem];
    console.log(newCartItem);
    let sumCopy = parseInt(state.sum);
    console.log(sumCopy);
    sumCopy = sumCopy-= newCartItem[action.id].price;
    console.log(sumCopy, typeof sumCopy, "parseInt");
    newCartItem.map(ele => {
      if (ele.id == action.id) {
        newCounter = ele.counter = ele.counter - 1;
          newPrice =  ele.price/=newCounter ;
        console.log("match", newCounter);
      }
    });

    return {
      ...state,
      cartItem: [...newCartItem],
      sum: sumCopy
    };
  }
  return state;
};
export default RootReducers;
