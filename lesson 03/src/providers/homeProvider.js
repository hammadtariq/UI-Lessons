import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../containers/Home";


const mapStateToProps = state => {
  return {
      myList:state.SliderImages,
      leftImages:state.leftImages,
      bodyObject:state.bodyObject,
      

  };
};

const mapDispatchToProps = dispatch => {
  return {
     changeCount:(count,Total)=>{dispatch({type:"changeCount",payload:{count,Total}})},
     changeStateOfDrawer:(visible)=>{dispatch({type:"changeStateOfDrawer",payload:visible})},
     updateCartList:(myList)=>{dispatch({type:"updateCartList",payload:myList})}

  };
};

const homeProvider = withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));

export default homeProvider;
