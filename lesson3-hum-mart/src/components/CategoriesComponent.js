import React from 'react';
import ExtraComtentTwo from './ExtraContentTwo';
import { connect } from 'react-redux';


class CategoriesComponent extends React.Component{
    render(){
        console.log(this.props.dataItem)
        return(
            <div className="abc">
                <ExtraComtentTwo/>
                <div>
        {/* <p>{this.props.match.params.id}</p>
        <p>{this.props.match.params.content}</p>
        <p>{this.props.match.params.contentTwo}</p>
        <p>{this.props.match.params.imgUrl}</p> */}
                </div>
             


            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) =>{
    const id = ownProps.match.params.id
    return{
        dataItem:state.data.find(dataItem =>dataItem.id===id)
    }
}
export default connect(mapStateToProps)(CategoriesComponent);