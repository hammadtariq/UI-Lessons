import { connect } from "react-redux";
import Home from "../container/home";
import { openCart, closeCart } from "../actions/actions";

const mapDispatchtoProps = dispatch => {
  return {
    display: () => dispatch(openCart()),
    onClose: () => dispatch(closeCart())
  };
};

const mapStatetoProps = state => {
  return {
    mobile: state.items.Mobiledata,
    offer: state.items.offers,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible
  };
};

const homeProvider = connect(mapStatetoProps, mapDispatchtoProps)(Home);
export default homeProvider;
