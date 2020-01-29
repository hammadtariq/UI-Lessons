import {connect} from "react-redux";
import Cart from '../components/card';
import { withRouter } from "react-router-dom";

const mapStateToProps= (state)=>{
    console.log(state,"cart state")
    return{
        
     data:state.data
    }
   }
   const mapDispatchToProps = dispatch =>{
  
    return {
      
        addtocart:(id)=>{dispatch({type:'ADD_CART',id:id})}

    }
}

const CardProvider = withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart));
export default CardProvider;