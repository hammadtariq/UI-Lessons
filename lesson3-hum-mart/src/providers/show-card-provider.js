import {connect} from 'react-redux';
import Header from '../components/Header';
// import Drawer from '../components/'
import {a,closeDrawer} from '../actions/showdrawersaction.js'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state)=>{
    console.log(state,"cart state in header")
    return{
        visible:state.visible,
        cartItem:state.cartItem,
    }
}
const mapDispatchToProps = (dispatch)=>{
    debugger;
    return{
        showVisibility:(visibleState)=>{dispatch(a(visibleState))},
        hidevisibility:(visibleState)=>{dispatch(closeDrawer(visibleState))}
    }
}
const ShowCardProvider = withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))
export default ShowCardProvider;