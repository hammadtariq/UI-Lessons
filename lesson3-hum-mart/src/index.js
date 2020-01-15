import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouterComponents from './RouterComponents'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducers from './reducers/RootReducers'
const store = createStore(RootReducers)

ReactDOM.render(<Provider store={store}><RouterComponents /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
