export const addToCounter = (index,counter) =>{
    return{
        type:'ADD_TO_COUNTER',
         count:counter,
        id:index
    }
}
export const subtractToCounter = (index,counter) =>{
    return{
        type:'SUB_TO_COUNTER',
        count:counter,
        id:index
    }
}