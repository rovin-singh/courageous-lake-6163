import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {cartReducer} from "./cart/reducer";


const rootreducer=combineReducers({
    cart:cartReducer
})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))