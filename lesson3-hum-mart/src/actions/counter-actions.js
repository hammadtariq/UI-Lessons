export const addToCounter = (id) =>{
    return{
        type:'ADD_TO_COUNTER',
        // count:counterState,
        id:id
    }
}