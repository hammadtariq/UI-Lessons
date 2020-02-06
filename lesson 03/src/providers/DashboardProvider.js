import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dashboard from "../containers/Dashboard";

const mapStateToProps = state => {
  return {
  
    bodyObject: state.bodyObject
  };
};



const DashboardProvider = withRouter(
  connect(mapStateToProps)(Dashboard)
);

export default DashboardProvider;
