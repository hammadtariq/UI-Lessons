import { connect } from "react-redux";
import Cart from "../components/card";
import { withRouter } from "react-router-dom";
import {addToCart,addToCartCounter} from '../actions/add-to-cart'

const mapStateToProps = state => {
  console.log(state, "cart state");
  return {
    data: state.data,
    cartItem:state.cartItem,
    count:state.count
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addtocart:(id,price) => {
      // dispatch({ type: "ADD_CART", id: id,price:price });
      dispatch(addToCart(id,price))
    },
    addtocartcounter:()=>{
      dispatch(addToCartCounter())
    }

  };
};

const CardProvider = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Cart)
);
export default CardProvider;
