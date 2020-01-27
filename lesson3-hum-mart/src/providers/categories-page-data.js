import {connect} from "react-redux";
import CategoriesComponent from '../components/CategoriesComponent';
import { withRouter } from "react-router-dom";
const mapStateToProps= (state)=>{
    return{
     data:state.categoriesData
    }
   }

const CategoriesPageData = withRouter(connect(mapStateToProps)(CategoriesComponent));
export default CategoriesPageData;