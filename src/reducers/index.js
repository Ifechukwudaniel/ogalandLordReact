
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';

///reducers
import {reducer as formReducer} from 'redux-form'
import {rentalReducer,selectedRentalReducer} from './rental-reducer';
import {authReducer} from './auth-reducer'


 export const init =()=>{

    const reducer = combineReducers({
      rentals:rentalReducer,
      rental:selectedRentalReducer,
      form : formReducer,
      auth:authReducer
    });
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store  =createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

    return store;
}