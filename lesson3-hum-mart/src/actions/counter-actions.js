export const addToCounter = (index) =>{
    return{
        type:'ADD_TO_COUNTER',
        // count:counterState,
        id:index
    }
}
export const subtractToCounter = (id) =>{
    return{
        type:'SUB_TO_COUNTER',
        // count:counterState,
        id:id
    }
}