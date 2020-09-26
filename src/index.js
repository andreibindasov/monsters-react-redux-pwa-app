import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import thunkMiddleware from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { searchMonsters, requestMonsters } from './reducers'

const logger = createLogger()
const rootReducer = combineReducers({searchMonsters, requestMonsters})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider  store={store}>
                    <App/>
                </Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.register();
// if ('serviceWorker' in navigator){
//     navigator.serviceWorker.register('service-worker.js')
//     .then(function(registration){
//         console.log('Hooray: ', registration.scope)
//     }).catch(function(err){
//         console.log('Whoops: ', err)
//     })
// }
