import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../containers/Login";

const mapStateToProps = state => {
  return {
        user:state.bodyObject.AdminLogin.name,
        password:state.bodyObject.AdminLogin.Password
  };
};



const LoginProvider = withRouter(
  connect(mapStateToProps)(Login)
);

export default LoginProvider;
