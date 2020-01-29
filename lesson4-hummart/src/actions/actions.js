import {message} from 'antd'

var data = [],total=0;
export function CartOpen() {
  return { type: "cartopen" };
}

export function CartClose() {
  return { type: "cartclose" };
}

export function addtoCart(data,total) {
  message.success('Item Added')
  return { type: "addCart", data,total };
}

export function addSpecific(index) {
  return async (dispatch, getState) => {
    const state = getState();
    data.push(state.items.mobilesCategory[index])
    total=total+state.items.mobilesCategory[index].price;
    dispatch(addtoCart(data,total));
  };
}

export function addCart(index, name) {
  return async (dispatch, getState) => {
    const state = getState();
    if (name === "mobiles") {
      data.push(state.items.Mobiledata[index])
      total=total+state.items.Mobiledata[index].price;
    } else {
      data.push(state.items.offers[index])
      total=total+state.items.offers[index].price;
    }
    dispatch(addtoCart(data,total));
  };
}
