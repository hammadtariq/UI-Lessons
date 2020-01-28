

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Mobile from "../containers/Mobile";


const mapStateToProps = state => {
  return {
    MenuList:state.MenuList,
    CardImages:state.CardImages
      
  };
};

const mobileProvider = withRouter(connect(mapStateToProps)(Mobile));

export default mobileProvider;




