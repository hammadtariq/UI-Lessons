import initState from "../appState/initState";
 import data from '../reducers/dataReducer.js';
import visible from './drawerReducer';
import cartItem from './addToCartReducer';
import categories from './categoriesDataReducer';
export default function reducer(state = initState, action) {
return{
  data:data(state.data,action),
  visible:visible(state.visible,action),
  cartItem:cartItem(state.cartItem,action),
  categories:categories(state.categories,action),
  // sum:sum(state.sum,action)
}

//   if (action.type === "SHOW_DRAWER") {
//     console.log(action, "actions");
//     return {
//       ...state,
//       visible: true
//     };
//   }
//   if (action.type === "CLOSE_DRAWER") {
//     return {
//       ...state,
//       visible: false
//     };
//   }
//   if (action.type === "ADD_CART") {
   
//       return {
//         ...state,
//         cartItem: [...state.cartItem],
        
//       };
    
//   }
//   if (action.type === "ADD_TO_COUNTER") {
//     let newCounter;
//     let newPrice;
//     let eachNewSum;
//     const newCartItem = [...state.cartItem];
//     let sumCopy = parseInt(state.sum);
//     sumCopy = sumCopy + newCartItem[action.id].price;
//     newCartItem.map((ele, index) => {
//       if (index == action.id) {
//         newCounter = ele.counter = ele.counter + 1;
//         newPrice += newPrice = ele.price * newCounter;
//         ele.sum = ele.price * newCounter 
//       }
//     });
//     return {
//       ...state,
//       cartItem: [...newCartItem],
//       sum: sumCopy
//     };
//   }
//   if (action.type === "SUB_TO_COUNTER") {
//     let newCounter;
//     let eachNewSum;
//     let newPrice = 0;
//     const newCartItem = [...state.cartItem];
//     let sumCopy = parseInt(state.sum);
//     sumCopy = sumCopy - newCartItem[action.id].price;
//     newCartItem.map((ele, index) => {
//       if (index == action.id) {
//         newCounter = ele.counter = ele.counter - 1;
//         newPrice = ele.sum /= newCounter;
//         eachNewSum = ele.sum /= newCounter
//       }
//     });

//     return {
//       ...state,
//       cartItem: [...newCartItem],
//       sum: sumCopy
//     };
//   }
//   if(action.type==="ADD_TO_CART_COUNTER"){
//     const newCartCounter = state.count;
   
//     return{
//       ...state,
//       count:newCartCounter+1
//     }
//   }
//   return state;
 };
