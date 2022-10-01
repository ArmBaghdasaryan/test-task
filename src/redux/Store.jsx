import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import CatsReducer from "./Reduser";


const rootReducers = combineReducers({
    cats:CatsReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;