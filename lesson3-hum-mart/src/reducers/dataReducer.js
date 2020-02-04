import {produce} from 'immer';
const data = produce((draft,action)=>{
  
    return draft
    // switch(action.type){
    //     case "SHOW_DRAWER":
    //         draft.visi = true;
           
    //         return;
    
    //       case 'CLOSE_DRAWER':
    //         draft.visi = false;
    //         return; 
    // }
})
export default data