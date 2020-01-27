import { connect } from "react-redux";
import Home from "../container/home";

function CartOpen() {
  return { type: "cartopen" };
}

const mapDispatchtoProps = dispatch => {
  return {
    display: () => {
      dispatch(CartOpen());
    }
  };
};

const mapStatetoProps = state => {
  return {
    mobile: state.Mobiledata,
    offer: state.offers,
    count: state.count,
    showZero: state.showZero,
    total: state.total,
    visible: state.visible,
    style:state.styleS
  };
};

const homeProvider = connect(mapStatetoProps, mapDispatchtoProps)(Home);
export default homeProvider;
