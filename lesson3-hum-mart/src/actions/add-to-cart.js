export const addToCart = (id,price)=>{
    
    return{
        type:'ADD_CART',
        id:id,
       price:price,
     }
 }
 // export const addCart = (id)=>{
 //     let cartCopy = [...this.props.categoriesData];
 //     let sumCopy = parseInt(this.props.sum);
 //     sumCopy = sumCopy + this.props.categoriesData[id].price;
 //     let cartItemCopy = [...this.props.cartItem]
 //      let newCartItem = cartCopy.find(ele => ele.id == id);
 //    console.log(newCartItem.id,"newCartItem")
 // console.log(cartItemCopy,"cartCopy");
 // cartItemCopy.map((newitem)=>{
 //       if(newCartItem.id===newitem.id){
 //         return alert("already exist")
 //       }
 //       else{
 //         return newCartItem
 //       }
 //     })
 // }
 
 //     let cartCopy = [...state.categoriesData];
 //     let sumCopy = parseInt(state.sum);
 //     sumCopy = sumCopy + state.categoriesData[action.id].price;
 //     let cartItemCopy = [...state.cartItem]
 //      let newCartItem = cartCopy.find(ele => ele.id == action.id);
 //    console.log(newCartItem.id,"newCartItem")
 // console.log(cartItemCopy,"cartCopy");
 //  cartItemCopy.map((newitem)=>{
 //   if(newCartItem.id===newitem.id){
 //     return alert("already exist")
 //   }
 //   else{
 //     return newCartItem
 //   }
 // })
 //     return {
 //       ...state,
 //       cartItem: [...state.cartItem, newCartItem],
 //       sum: sumCopy
 //     };
 
 export const addToCartCounter = ()=>{
     return{
         type:'ADD_TO_CART_COUNTER',
     }
 }
 // export const addToCounter = (id,price) =>{
 //     return{
 //         type:'ADD_TO_COUNTER',
 //         // count:counterState,
 //         id:id,
 //         price:price
 //     }
 // }