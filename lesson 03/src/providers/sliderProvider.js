import { connect } from "react-redux";
import Slider from "../components/Slider";
import { withRouter } from "react-router-dom";



const mapStateToProps = state => {
  
  return {
        myListOfImages:state.SliderImages
};
};

const ms = withRouter(connect(mapStateToProps)(Slider));



export default ms;
