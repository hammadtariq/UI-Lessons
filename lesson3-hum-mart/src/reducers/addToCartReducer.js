import { produce } from "immer";
const cartItem = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_CART':
     console.log(draft.value[action.index],action.index,action.id,action.price,"add tp")
     draft.loading = true;
     draft.error = null;
     draft.value = action.id;
     draft.sum=action.price;
     draft.count=action.cartcount;
     return;
    case 'ADD_TO_COUNTER':
      console.log(action.id,action.count)
      draft.loading = true;
      draft.error =null;
      draft.value = action.id
      draft.sum=action.count;
      
   return;
   case 'SUB_TO_COUNTER':
       console.log(action.id,action.count)
       draft.loading = true;
       draft.error =null;
      draft.value = action.id
     draft.sum=action.count;
   return;
    default:
      return draft;
  }
});

export default cartItem;
