export const addToCart = (id)=>{
   return{
       type:'ADD_CART',
       id:id
    }
}
export const addToCounter = (id,price) =>{
    return{
        type:'ADD_TO_COUNTER',
        // count:counterState,
        id:id,
        price:price
    }
}