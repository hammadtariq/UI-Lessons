export const addToCart = (id,price)=>{
   return{
       type:'ADD_CART',
       id:id,
       price:price
    }
}
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