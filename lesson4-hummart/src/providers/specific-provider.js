import { connect } from "react-redux";
import Specific from "../container/specificPage";
import { CartOpen, CartClose, addSpecific,plus,minus,checkOut } from "../actions/actions";


const mapDispatchtoProps = dispatch => {
    return {
      checkout : (arr) => dispatch(checkOut(arr)),
      display: () => dispatch(CartOpen()),
      onClose: () => dispatch(CartClose()),
      addCart: (index, name) => dispatch(addSpecific(index)),
      plus: (index, arr) => dispatch(plus(index, arr)),
      minus: (index, arr) => dispatch(minus(index, arr))
    };
  };

const mapStatetoProps = state => {
  return {
    mobile: state.items.mobilesCategory,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible,
    index: state.cart.index,
    nav:state.nav.style
  };
};

const specificProvider = connect(mapStatetoProps,mapDispatchtoProps)(Specific);
export default specificProvider;
