import { produce } from "immer";

const audioList = produce((draft, action) => {
  switch (action.type) {
    case "changeCount":
        
      draft.count = action.payload.count;
      draft.Total=action.payload.Total;
      return;
      case "changeStateOfDrawer":
          debugger;
        draft.visible = action.payload;
        return;
        case "updateCartList":
          debugger;
        draft.myList = action.payload;
        return;

    default:
      return draft;
  }
});

export default audioList;
