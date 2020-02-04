import initialstate from "../app-state/app-state";
import { produce } from "immer";

export default function reducer(state = initialstate, action) {
  return {
    cart: cart(state.cart, action),
    items: cart(state.items, action),
    nav: cart(state.nav, action),
    checkOut: cart(state.checkOut, action)
  };
}

const cart = produce((draft, action) => {
  switch (action.type) {
    case "cartopen":
      draft.visible = true;
      return;
    case "cartclose":
      draft.visible = false;
      return;
    case "addCart":
      draft.index = action.data;
      draft.count += 1;
      draft.total = action.total;
      return;
    case "plus":
      draft.index = action.list;
      draft.total = action.total;
      draft.count += 1;
      return;
    case "minus":
      draft.index = action.list;
      draft.total = action.total;
      draft.count -= 1;
      return;
    case "checkOut":
      draft.order = action.totall;
      draft.index = [];
      draft.count = 0;
      draft.total = 0;
      return;
    case "delete":
      draft.order = [];
      return;
    case "sort":
      draft.mobilesCategory = action.list;
      return;
    // case 'changeStyle':
    //   draft.nav="nav-again"
    //   return;
    default:
      return draft;
  }
});
