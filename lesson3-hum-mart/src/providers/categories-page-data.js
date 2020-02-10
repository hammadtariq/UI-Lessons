import {connect} from "react-redux";
import CategoriesComponent from '../components/CategoriesComponent';
import { withRouter } from "react-router-dom";
import { addToCart, addToCartCounter,sortByPrice,sortByName } from "../actions/add-to-cart";
const mapStateToProps= (state)=>{
    console.log(state,"categoriespage")
    return{
        categoriesData:state.categoriesData,
        // data:state.data,
        cartItem: state.cartItem,
        sum:state.sum,
        count:state.count,
        visible: state.visible,
    }
   }
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id,price,cartcount) => dispatch(addToCart(id,price,cartcount)),
        addtocartcounter: () =>dispatch(addToCartCounter()),
        sortByPrice: (id) =>dispatch(sortByPrice(id)),
        sortByName: (id) =>dispatch(sortByName(id))

    }
}
const CategoriesPageData = withRouter(connect(mapStateToProps,mapDispatchToProps)(CategoriesComponent));
export default CategoriesPageData;