import { connect } from "react-redux";
import Cart from "../components/card";
import { withRouter } from "react-router-dom";
import { addToCart, addToCartCounter } from "../actions/add-to-cart";
const mapStateToProps = state => {
  console.log(state, "cart state");
  return {
    data: state.data,
    cartItem: state.cartItem,
    count: state.count
  };
};
const mapDispatchToProps = dispatch => {
  return {

    addToCart: (id,index) => dispatch(addToCart(id,index)),
    addtocartcounter: () =>dispatch(addToCartCounter())
    
  };
};

const CardProvider = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Cart)
);
export default CardProvider;
