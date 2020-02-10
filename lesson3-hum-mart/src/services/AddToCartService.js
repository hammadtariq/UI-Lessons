import {message} from 'antd'
import React from 'react'
class AddToCartService {
 addtocart(Id,Price){
        console.log(this.props)
    //     let newSum, newvalue,cartCounter;
    //     let cartCopy = this.props.data;
    //     cartCounter=this.props.cartItem.count;
    //     console.log(cartCopy)
    //      let cartItemCopy = this.props.cartItem;
    //      console.log(cartItemCopy)
    //          let newCartItem = cartCopy.value.find(ele => ele.id == Id);
    //        console.log(newCartItem,"newCartItem")
    //    if(this.props.cartItem.value.length >0){
    //      let cartflg = false; let i; 
    //        for( i=0;i<cartItemCopy.value.length;i++){
    //          if(newCartItem.id ===cartItemCopy.value[i].id){
    //            cartflg=true     
    //          }    
    //        }
    //        if(cartflg ===false){ 
    //          message.success("added");
    //          cartCounter +=1;
    //          newvalue=[...cartItemCopy.value,newCartItem];
    //          newSum=cartItemCopy.sum+Price
    //          this.props.addToCart(newvalue,newSum,cartCounter);    
    //        }
    //        else{
    //          cartflg=false;
    //          message.success("exist")
    //        }
    //        }
    //        else{
    //          cartCounter +=1;
    //           newvalue=[...cartItemCopy.value,newCartItem];
    //           newSum=cartItemCopy.sum+Price
    //          message.success("added")
    //          this.props.addToCart(newvalue,newSum,cartCounter);
    //        }
    }
 }
export default AddToCartService;