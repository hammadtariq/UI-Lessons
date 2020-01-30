import { connect } from "react-redux";
import Admin from "../container/adminPage";

const mapStatetoProps = state => {
  return {
    checkOut: state.checkOut
  };
};
const adminProvider = connect(mapStatetoProps)(Admin);
export default adminProvider;
