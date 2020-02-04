import { connect } from "react-redux";
import Mobiles from "../container/categoriesmobiles";
import {
  CartOpen,
  CartClose,
  addSpecific,
  plus,
  minus,
  checkOut,
  sort
} from "../actions/actions";

const mapDispatchtoProps = dispatch => {
  return {
    sort: list => dispatch(sort(list)),
    checkout: arr => dispatch(checkOut(arr)),
    display: () => dispatch(CartOpen()),
    onClose: () => dispatch(CartClose()),
    addCart: index => dispatch(addSpecific(index)),
    plus: (index, arr) => dispatch(plus(index, arr)),
    minus: (index, arr) => dispatch(minus(index, arr))
  };
};

const mapStatetoProps = state => {
  return {
    mobilecat:state.items.mobilesCategory,
    mobile: state.items.mobilesCategory,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible,
    index: state.cart.index,
    nav: state.nav.style
  };
};

const mobileProvider = connect(mapStatetoProps, mapDispatchtoProps)(Mobiles);
export default mobileProvider;
