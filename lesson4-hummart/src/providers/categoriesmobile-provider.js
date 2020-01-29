import { connect } from "react-redux";
import Mobiles from "../container/categoriesmobiles";
import { CartOpen, CartClose, addSpecific } from "../actions/actions";

const mapDispatchtoProps = dispatch => {
  return {
    display: () => dispatch(CartOpen()),
    onClose: () => dispatch(CartClose()),
    addCart: (index, name) => dispatch(addSpecific(index))
  };
};

const mapStatetoProps = state => {
  return {
    mobile: state.items.mobilesCategory,
    count: state.cart.count,
    showZero: state.cart.showZero,
    total: state.cart.total,
    visible: state.cart.visible,
    index: state.cart.index
  };
};

const mobileProvider = connect(mapStatetoProps, mapDispatchtoProps)(Mobiles);
export default mobileProvider;
