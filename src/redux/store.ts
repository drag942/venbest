import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

const reducers = combineReducers({
    appReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;