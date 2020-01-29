export const a =( visibleState)=>{
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