import React from 'react';
import ExtraContentOne from "./ExtraContentOne";

// import Header from "./Header";

import ExtraComtentTwo from './ExtraContentTwo';


class CategoriesComponent extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="abc">
                <ExtraComtentTwo/>
                <div>
        <p>{this.props.match.params.id}</p>
                </div>
             


            </div>
        )
    }
}
export default CategoriesComponent;