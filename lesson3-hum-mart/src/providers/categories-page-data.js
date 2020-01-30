import {connect} from "react-redux";
import CategoriesComponent from '../components/CategoriesComponent';
import { withRouter } from "react-router-dom";
import {addToCart} from "../actions/add-to-cart"
const mapStateToProps= (state)=>{
    return{
     data:state.categoriesData
    }
   }
const mapDispatchToProps = (dispatch)=>{
    return{
        addtocart:(id)=>(dispatch(addToCart(id)))
    }
}
const CategoriesPageData = withRouter(connect(mapStateToProps,mapDispatchToProps)(CategoriesComponent));
export default CategoriesPageData;