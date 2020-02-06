import { connect } from "react-redux";
import Header from "../components/Header";
import { showDrawer, closeDrawer ,showData} from "../actions/showdrawersaction.js";
import {addToCartCounter} from '../actions/add-to-cart'
import { withRouter } from "react-router-dom";



const mapStateToProps = state => {
  console.log(state, "cart state in header");
  return {
    data:state.data.value,
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
  },
  showdata:(state)=>{
    dispatch(showData(state))
  }
   
  };
};
const ShowCardProvider = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);

export default ShowCardProvider;
