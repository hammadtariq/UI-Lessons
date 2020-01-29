import { connect } from "react-redux";
import Home from "../container/home";
import { CartOpen, CartClose,addCart } from "../actions/actions";

const mapDispatchtoProps = dispatch => {
  return {
    display: () => dispatch(CartOpen()),
    onClose: () => dispatch(CartClose()),
    addCart: (index,name) => dispatch(addCart(index,name))
  };
};

const mapStatetoProps = state => {
  return {
    mobile: state.items.Mobiledata,
    offer: state.items.offers,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible,
    index:state.cart.index
  };
};

const homeProvider = connect(mapStatetoProps, mapDispatchtoProps)(Home);
export default homeProvider;
