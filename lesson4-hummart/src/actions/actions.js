import thunk from "redux-thunk";

export function CartOpen() {
    return { type: "cartopen" };
  }

export function CartClose() {
    return { type: "cartclose" };
  }

export function openCart(){
    return async (dispatch,getState)=>{
        dispatch(CartOpen())
        try{
            return;
        }
        catch(e){
            throw(e)
        }
    }
}
export function closeCart(){
    return async (dispatch,getState)=>{
        dispatch(CartClose())
        try{
            return;
        }
        catch(e){
            throw(e)
        }
    }
}