import {FETCH_RENTAL_BY_ID_SUCCESS
  ,FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SUCCESS,
    FETCH_RENTALS_INIT,
    FETCH_RENTALS_FAIL} from '../actions/types'
const IntialRentals ={
  rentals :{
    data:[],
    error:[]
  },
  rental :{
    data:[],
    error:[]
  }
}
export const rentalReducer =(state = IntialRentals.rentals, action) =>{
  switch (action.type) {
    case  FETCH_RENTALS_INIT:
      return {...state,data :[],error:[]}
    case FETCH_RENTAL_SUCCESS:
      return {...state,data:action.rentals };
    case FETCH_RENTALS_FAIL:
      return Object.assign({},state,{error:action.errors, data:[]})
    default:
          return state
  }
}
export const selectedRentalReducer =(state = IntialRentals.rental, action) =>{
  switch (action.type) {
    case  FETCH_RENTAL_BY_ID_INIT:
       return {...state,data:{}}

    case FETCH_RENTAL_BY_ID_SUCCESS:

        return Object.assign({},state,{data:action.rental})

    default:
    
       return state
  }
}