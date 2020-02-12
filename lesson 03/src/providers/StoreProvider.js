import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Store from "../containers/Store";

const mapStateToProps = state => {
  return {
        Store:state.bodyObject
  };
};



const StoreProvider = withRouter(
  connect(mapStateToProps)(Store)
);

export default StoreProvider;
