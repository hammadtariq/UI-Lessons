export const showDrawer =( visibleState)=>{
 return{
    type:'SHOW_DRAWER',
    visible:visibleState
 }
}
export  const closeDrawer = (visibleState)=>{
return{
    type:'CLOSE_DRAWER',
    visible:visibleState
}
}
export const showData = (state)=>{
    return{
        type:'SHOW_DATA',
        state:state,
    }
}