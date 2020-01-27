import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../containers/Home";


const mapStateToProps = state => {
  return {
      myList:state.SliderImages
      ,leftImages:state.leftImages,
      productImages:state.productImages,
      categoriesdiv:state.categoriesdiv

  };
};

const homeProvider = withRouter(connect(mapStateToProps)(Home));

export default homeProvider;
