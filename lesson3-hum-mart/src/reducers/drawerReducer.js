import {produce} from 'immer';
import {showDrawer,closeDrawer} from '../actions/showdrawersaction'

const visible = produce((draft,action)=>{
    switch(action.type){
        case "SHOW_DRAWER":
            draft.visi = true;
           
            return;
    
          case 'CLOSE_DRAWER':
            draft.visi = false;
            return; 
    }
})
export default visible