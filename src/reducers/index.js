import * as Redux from 'redux';
import {rentalReducer,selectedRentalReducer} from './rental-reducer';
import thunk from "redux-thunk";
 export const init =()=>{

    const reducer = Redux.combineReducers({
      rentals:rentalReducer,
      rental:selectedRentalReducer
    });
    const store  = Redux.createStore(reducer,Redux.applyMiddleware(thunk));

    return store;
}