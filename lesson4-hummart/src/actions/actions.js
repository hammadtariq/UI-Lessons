import { message } from "antd";

var data = [],
  total = 0,
  flag = false;
export function CartOpen() {
  return { type: "cartopen" };
}

export function CartClose() {
  return { type: "cartclose" };
}

export function Submit(list) {
  debugger;
  message.success("Review Submitted!");
  return { type: "review", list };
}

export function addtoCart(data, total) {
  return { type: "addCart", data, total };
}

export function addSpecific(index) {
  return (dispatch, getState) => {
    const state = getState();
    for (let i = 0; i < data.length; i++) {
      if (state.items.mobilesCategory[index].key === data[i].key) {
        flag = true;
      }
    }
    if (flag === false) {
      data.push(state.items.mobilesCategory[index]);
      total = total + state.items.mobilesCategory[index].price;
      dispatch(addtoCart(data, total));
      message.success("Item(s) Added");
    } else {
      flag = false;
      message.error("Already in Cart");
    }
  };
}

export function plus(index, arr) {
  let list, val;
  list = arr;
  val = list[index];
  val.quantity += 1;
  list.splice(index, 1, val);
  total = total + list[index].price;
  return { type: "plus", list, total };
}

export function minus(index, arr) {
  let list;
  list = arr;
  if (list[index].quantity > 0) {
    list[index].quantity -= 1;
    total = total - list[index].price;
  }
  if (list[index].quantity === 0) {
    list[index].quantity = 1;
    list.splice(index, 1);
  }

  return { type: "minus", list, total };
}

export function sort(arr) {
  let list = [...arr];
  list.sort((a, b) => (a.price > b.price ? 1 : -1));
  return { type: "sort", list };
}
export function sortName(arr) {
  let list = [...arr];
  list.sort((a, b) => (a.title > b.title ? 1 : -1));
  return { type: "sort", list };
}

export function addCart(index, name) {
  return (dispatch, getState) => {
    const state = getState();
    if (name === "mobiles") {
      for (let i = 0; i < data.length; i++) {
        if (state.items.Mobiledata[index].key === data[i].key) {
          flag = true;
        }
      }
      if (flag === false) {
        data.push(state.items.Mobiledata[index]);
        total = total + state.items.Mobiledata[index].price;
        message.success("Item(s) Added");
        dispatch(addtoCart(data, total));
      } else {
        flag = false;
        message.error("Already in Cart");
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (state.items.offers[index].key === data[i].key) {
          flag = true;
        }
      }
      if (flag === false) {
        data.push(state.items.offers[index]);
        total = total + state.items.offers[index].price;
        message.success("Item(s) Added");
        dispatch(addtoCart(data, total));
      } else {
        flag = false;
        message.error("Already in Cart");
      }
    }
  };
}

// export function handleScroll(arg) {

//     if (arg >= 177) {
//       return { type: "changeStyle" };
//     }
//   };

export function Delete(index, data) {
  let arr = [...data];
  arr.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(arr));
  message.success("Item Deleted!");
  return { type: "delete" };
}

export function checkOut(arr) {
  let totall=arr[0]
  let b=arr[1]
  let order = [{ id: b, totall }];
  localStorage.setItem("orders", JSON.stringify(order));
  data = [];
  total = 0;
  flag = false;
  message.success("Succesfully Checked Out !");
  return { type: "checkOut", totall };
}
