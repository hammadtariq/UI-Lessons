import {connect} from 'react-redux'
import withRouter from 'react-router-dom';
import AddToCartService from '../services/AddToCartService';

const mapStateToProps = (state)=>{
   return{
    data:state.data,
    categoriesData:state.categoriesData
   }
}
const ServiceProvider = withRouter(connect(mapStateToProps)(AddToCartService))
export  default ServiceProvider;