import { connect } from "react-redux";
import Header from "../components/Header";
// import Drawer from '../components/'
import { a, closeDrawer } from "../actions/showdrawersaction.js";
import {addToCounter} from '../actions/add-to-cart'
import { withRouter } from "react-router-dom";


const mapStateToProps = state => {
  console.log(state, "cart state in header");
  return {
    visible: state.visible,
    cartItem: state.cartItem,
    sum:state.sum
  };
};
const mapDispatchToProps = dispatch => {
  debugger;
  return {
    showVisibility: visibleState => {
      dispatch(a(visibleState));
    },
    hidevisibility: visibleState => {
      dispatch(closeDrawer(visibleState));
    },
    plusCounter:(id)=>{
      dispatch(addToCounter(id))
  }
   
  };
};
const ShowCardProvider = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
export default ShowCardProvider;
