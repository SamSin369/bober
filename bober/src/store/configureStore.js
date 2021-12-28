import {applyMiddleware, createStore, compose} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension';
import testReducer from '../Features/Sandbox/TestReducer'
import rootReducer from './rootReducer';
import thunk from "redux-thunk";
import { verifyAuth } from '../auth/authActions';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export function configureStore() {
    const store =  createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

    store.dispatch(verifyAuth())
    return store
}