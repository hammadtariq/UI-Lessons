import { produce } from "immer";
import {MYACTION} from "../utils/constants"

const ReducerList = produce((draft, action) => {
  switch (action.type) {
    case MYACTION.CHANGECOUNT:
        
      draft.count = action.payload.count;
      draft.Total=action.payload.Total;
      return;
      case MYACTION.DrawerState:
          debugger;
        draft.visible = action.payload;
        return;
        case MYACTION.updateCartList:
          debugger;
        draft.myList = action.payload;
        return;

    default:
      return draft;
  }
});

export default ReducerList;
