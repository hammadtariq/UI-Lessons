import initialstate from "../app-state/app-state";
import { produce } from "immer";

export default function reducer(state = initialstate, action) {
  return {
    cart: cart(state.cart, action),
    items: cart(state.items, action)
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
    default:
      return draft;
  }
});
