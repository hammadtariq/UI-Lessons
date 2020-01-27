import {connect} from 'react-redux';
import Mobiles from '../container/categoriesmobiles';

const mapStatetoProps=state=>{
    return{
        mobile:state.Mobiledata,
        offer:state.offers,
        count:state.count,
        showZero:state.showZero,
        total:state.total
    }
}

const homeProvider=connect(mapStatetoProps)(Mobiles)
export default homeProvider;