import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import reducers from '../../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer } from './reducer/productReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer
})
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;