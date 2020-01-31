import { connect } from "react-redux";
import Admin from "../container/adminPage";
import {Delete} from '../actions/actions'

const mapStatetoProps = state => {
  return {
    checkOut: state.checkOut
  };
};
const mapDispatchtoProps = dispatch =>{
  return{
    delete: (index,data) => dispatch(Delete(index,data))
  }
}
const adminProvider = connect(mapStatetoProps,mapDispatchtoProps)(Admin);
export default adminProvider;
