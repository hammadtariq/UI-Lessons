import { connect } from "react-redux";
import Home from "../container/home";
import {
  CartOpen,
  CartClose,
  addCart,
  plus,
  minus,
  checkOut
} from "../actions/actions";

const mapDispatchtoProps = dispatch => {
  return {
    checkOut: (total) => dispatch(checkOut(total)),
    display: () => dispatch(CartOpen()),
    onClose: () => dispatch(CartClose()),
    addCart: (index, name) => dispatch(addCart(index, name)),
    plus: (index, arr) => dispatch(plus(index, arr)),
    minus: (index, arr) => dispatch(minus(index, arr))
  };
};

const mapStatetoProps = state => {
  return {
    mobilecat:state.items.mobilesCategory,
    mobile: state.items.Mobiledata,
    offer: state.items.offers,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible,
    index: state.cart.index,
    nav: state.nav.style
  };
};

const homeProvider = connect(mapStatetoProps, mapDispatchtoProps)(Home);
export default homeProvider;
