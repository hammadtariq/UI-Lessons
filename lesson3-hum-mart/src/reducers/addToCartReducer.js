import { addToCart } from "../actions/add-to-cart";
import { produce } from "immer";
import {addToCounter} from '../actions/counter-actions'
const cartItem = produce((draft, action) => {
  switch (action.type) {
   
    case 'ADD_CART':
         console.log(draft.value[action.index],action.index,action.id,"add tp")
      draft.loading = true;
      draft.error = null;
     draft.value[action.index] = action.id;
      return;
    case 'ADD_TO_COUNTER':
        console.log(action.id)
      draft.loading = true;
      draft.error =null;
//   draft.value[action.index].counter+=1;
   return;
    // case ACTIONS.SET_SELECTED_AUDIO_URL:
    //   draft.selectedAudioUrl = action.response;
    //   return;
    // case ACTIONS.SET_SELECTED_AUDIO_ID:
    //   draft.selectedAudioId = action.response;
    //   return;
    // case ACTIONS.SET_AUDIOS_INFO:
    //   draft.audiosInfo = action.response;
    //   return;

    default:
      return draft;
  }
});

export default cartItem;
