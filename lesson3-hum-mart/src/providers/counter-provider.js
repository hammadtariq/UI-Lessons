import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Counter from '../components/Counter';
import {addToCounter} from '../actions/counter-actions'
const mapStateToProps = (state)=>{
    return{
        state:state.cartItem
    }
}
const mapDispatchToProps = (state)=>{
    return{
        plusCounter:(id)=>{
            dispatch(addToCounter(id))
        }
    }
}
const counterProvider = withRouter(connect(mapStateToProps,mapDispatchToProps)(Counter))