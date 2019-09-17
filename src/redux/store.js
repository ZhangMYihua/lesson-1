import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
// add middleware to our store so that whenever actions get fired
// we can catch them & display them
// middleware recieves actions in, does something, and pass them to root reducer.

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
