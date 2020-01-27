import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Categories from '../components/Categories';
const mapStateTpProps = state =>{
    return{
        categories:state.categories
    }
}
const CategoriesProvider = withRouter(connect(mapStateTpProps)(Categories));
export default CategoriesProvider;
