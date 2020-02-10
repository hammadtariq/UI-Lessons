export const addToCart = (id,price,cartcount)=>{
    
    return{
        type:'ADD_CART',
        id:id,
       price:price,
       cartcount:cartcount,
     }
 }
 
 export const addToCartCounter = ()=>{
     return{
         type:'ADD_TO_CART_COUNTER',
     }
 }
export const sortByPrice = (id)=>{
    return{
        type:'SORT_PRICE',
        id:id
    }
}
export const sortByName = (id)=>{
    return{
        type:'SORT_NAME',
        id:id
    }
}