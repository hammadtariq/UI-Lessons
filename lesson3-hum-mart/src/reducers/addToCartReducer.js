import { produce} from 'immer';
import {addToCart} from '../actions/add-to-cart'
const cartItem = ((draft,action)=>{
    switch(action.type){
        case "ADD_CART":
          console.log(action)
        return;
           
    }
})
export default cartItem;