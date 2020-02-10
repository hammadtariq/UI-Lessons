import {connect} from 'react-redux'
import Store from '../container/store'
import {store} from '../actions/actions'

//localStorage.setItem('redirect',"{condition:false}")

const mapDispatchtoProps=dispatch=>{
    return{
        store:(arr)=>dispatch(store(arr))
    }
}

const mapStatetoProps=state=>{
    return{
        item:state.items
    }
}

const storeProvider=connect(mapStatetoProps,mapDispatchtoProps)(Store)
export default storeProvider