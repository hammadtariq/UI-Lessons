import {produce} from 'immer';
const categoriesData = produce((draft,action)=>{
  switch(action.type){
    case 'SORT_PRICE':
      console.log(action.id)
      draft.value=action.id;
      return;
      case 'SORT_NAME':
      console.log(action.id)
      draft.value=action.id;
      return;
        // return draft.value;
    default:
    return draft
  }
   
})
export default categoriesData