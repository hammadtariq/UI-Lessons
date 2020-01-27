import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Mobile from "../containers/Mobile";


const mapStateToProps = state => {
  return;
};

const mobileProvider = withRouter(connect(mapStateToProps)(Mobile));

export default mobileProvider;
