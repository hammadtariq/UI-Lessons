import { connect } from "react-redux";
import Header from "../components/Header";
// import Drawer from '../components/'
import { showDrawer, closeDrawer } from "../actions/showdrawersaction.js";
import {addToCounter,addToCartCounter} from '../actions/add-to-cart'
import { withRouter } from "react-router-dom";
import { Drawer } from "antd";


const mapStateToProps = state => {
  console.log(state, "cart state in header");
  return {
    visible: state.visible,
    cartItem: state.cartItem,
    sum:state.sum,
    count:state.count
  };
};
const mapDispatchToProps = dispatch => {
 
  return {
    showVisibility: visibleState => {
      dispatch(showDrawer(visibleState));
    },
    addtocartcounter:()=>{
      dispatch(addToCartCounter())
  }
   
  };
};
const ShowCardProvider = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);

export default ShowCardProvider;
