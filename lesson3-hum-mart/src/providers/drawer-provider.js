import { connect } from "react-redux";
import { closeDrawer } from "../actions/showdrawersaction.js";
import {addToCounter,subtractToCounter} from '../actions/counter-actions'
import { withRouter } from "react-router-dom";
import Drawers from '../components/Drawer'


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
    
    hidevisibility: visibleState => {
      dispatch(closeDrawer(visibleState));
    },
    plusCounter:(index,counter)=>{
      dispatch(addToCounter(index,counter))
  },
    minusCounter:(index,counter)=>{
        dispatch(subtractToCounter(index,counter))
    }
   
  };
};
const DrawerProvider = withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Drawers)
);
export default  DrawerProvider;
