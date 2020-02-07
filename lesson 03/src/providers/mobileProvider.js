import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Mobile from "../containers/Mobile";

const mapStateToProps = state => {
  return {
    MenuList: state.MenuList,
    CardImages: state.CardImages,
    bodyObject: state.bodyObject,
    ResetProductImages:state.CardImages

  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCount: (count, Total) => {
      dispatch({ type: "changeCount", payload: { count, Total } });
    },
    changeStateOfDrawer: visible => {
      dispatch({ type: "changeStateOfDrawer", payload: visible });
    },
    updateCartList: myList => {
      dispatch({ type: "updateCartList", payload: myList });
    },
    GetSortedList:(myList,List) => {
      debugger
      dispatch({ type: "GetSortedList", payload: {myList,List} });
    },
    updateProductImagesCounter: (myList) => {
      debugger
      dispatch({ type: "updateProductImagesCounter", payload:myList });
    }

  };
};

const mobileProvider = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Mobile)
);

export default mobileProvider;
