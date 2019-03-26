import {FETCH_RENTALS
  ,FETCH_RENTAL_BY_ID_SUCCESS
  ,FETCH_RENTAL_BY_ID_INIT} from '../actions/types'
const IntialRentaks ={
  rentals :{
    data:[]
  },
  rental :{
    data:[]
  }
}
export const rentalReducer =(state = IntialRentaks.rentals, action) =>{
  switch (action.type) {
     case FETCH_RENTALS:
      return {...state,data:action.rentals };
      default:
          return state
  }
}
export const selectedRentalReducer =(state = IntialRentaks.rental, action) =>{
  switch (action.type) {
    case  FETCH_RENTAL_BY_ID_INIT:
       return {...state,data:{}}

    case FETCH_RENTAL_BY_ID_SUCCESS:

        return Object.assign({},state,{data:action.rental})

    default:
    
       return state
  }
}