import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../containers/Home";


const mapStateToProps = state => {
  return {
      myList:state.SliderImages
      ,leftImages:state.leftImages,
      bodyObject:state.bodyObject,
      // productImages:state.productImages,
      // categoriesdiv:state.categoriesdiv

  };
};

const mapDispatchToProps = dispatch => {
  return {
     changeCount:(count)=>{dispatch({type:"changeCount",payload:count})}
  };
};

const homeProvider = withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));

export default homeProvider;
