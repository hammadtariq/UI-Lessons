import initialstate from "../app-state/app-state";
import { produce } from "immer";

export default function reducer(state = initialstate, action) {
  return state;
}

// const project = produce((draft, action) => {
//   debugger;
//   switch (action.type) {
//     case "cartopen":
//       draft.visible = !draft.visible;
//       return;
//     default:
//       return draft;
//   }
// });
