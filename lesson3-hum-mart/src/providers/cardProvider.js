import {connect} from "react-redux";
import Cart from '../components/card';
import { withRouter } from "react-router-dom";
const mapStateToProps= (state)=>{
    return{
     data:state.data
    }
   }

const CardProvider = withRouter(connect(mapStateToProps)(Cart));
export default CardProvider;