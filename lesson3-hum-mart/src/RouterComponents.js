import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import CategoriesComponent from './components/CategoriesComponent';
import Meal from './components/meal.js'
import CategoriesPageData from './providers/categories-page-data';
class RouterComponents extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={App}/>
                    <Route path="/category/:id" component={CategoriesPageData} />
                    <Route path="/descriptionmeal" component={Meal}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default RouterComponents;