class AddToCart {
    set cart(){
     let cartCopy = [...this.state.categoriesData];
    let sumCopy = parseInt(state.sum);
    sumCopy = sumCopy + state.categoriesData[action.id].price;
    let cartItemCopy = [...state.cartItem]
    // let newCartItem = cartCopy.find(ele => ele.id == action.id);
    // if (cartItemCopy.length > 0) {
    //   for (let i = 0; i < cartItemCopy.length; i++) {
    //     if (newCartItem.id == cartItemCopy[i].id) {
    //       state.flg = false;
    //       message.warning('Already added');
    //       break;
    //     } else {
    //       state.flg = true;
    //     }
    //   }
    //   if (state.flg == true) {
    //     return {
    //       ...state,
    //       cartItem: [...state.cartItem, newCartItem],
    //       sum: sumCopy,
    //       flg: false
    //     };
    //   }
    //   if (state.flg == false) {
    //     return {
    //       ...state,
    //     }
    //   }
    // }
    }
}