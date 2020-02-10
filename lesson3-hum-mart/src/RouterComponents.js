import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Default from './components/Default'
import Meal from './components/meal.js'
import CategoriesPageData from './providers/categories-page-data';
import ProduceDescriptionProvider from './providers/product-description-provider';
class RouterComponents extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={App}/>
                    <Route path="/category/:id" component={CategoriesPageData} />
                    <Route path="/descriptionmeal" component={Meal}/>
                    <Route path = "/description/:descriptionId" component={ProduceDescriptionProvider}/>
                    <Route path="/default" component={Default}/>
                   </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default RouterComponents;