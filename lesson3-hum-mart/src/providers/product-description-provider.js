import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProductDescritpion from '../components/ProductDescription';
import { addToCart, addToCartCounter } from "../actions/add-to-cart";
const mapStateToProps = state =>{
    debugger;
    console.log(state,"product")
    return{
        data:state.data,
        cartItem: state.cartItem,
      count: state.count,
      sum:state.sum,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id,price,cartcount) => dispatch(addToCart(id,price,cartcount)),
        addtocartcounter: () =>dispatch(addToCartCounter())
    }
}
const ProduceDescriptionProvider = withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductDescritpion))
export default ProduceDescriptionProvider;