import { connect } from "react-redux";
import Mobiles from "../container/categoriesmobiles";
import { openCart, closeCart } from "../actions/actions";

const mapDispatchtoProps = dispatch => {
  return {
    display: () => dispatch(openCart()),
    onClose: () => dispatch(closeCart())
  };
};

const mapStatetoProps = state => {
  console.log(state);
  debugger;
  return {
    mobile: state.items.mobilesCategory,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible
  };
};

const mobileProvider = connect(mapStatetoProps, mapDispatchtoProps)(Mobiles);
export default mobileProvider;
