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
    plusCounter:(index)=>{
      dispatch(addToCounter(index))
  },
    minusCounter:(id)=>{
        dispatch(subtractToCounter(id))
    }
   
  };
};
const DrawerProvider = withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Drawers)
);
export default  DrawerProvider;
