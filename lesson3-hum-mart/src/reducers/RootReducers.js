import initState from "../appState/initState";
 import data from '../reducers/dataReducer.js';
import visible from './drawerReducer';
import cartItem from './addToCartReducer';
import categories from './categoriesDataReducer';
import categoriesData from './categoriesReducer'
export default function reducer(state = initState, action) {
return{
  data:data(state.data,action),
  visible:visible(state.visible,action),
  cartItem:cartItem(state.cartItem,action),
  categories:categories(state.categories,action),
  categoriesData:categoriesData(state.categoriesData,action)
  // sum:sum(state.sum,action)
}

 };
