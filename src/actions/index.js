import {
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SUCCESS
} from './types'

import axois from 'axios';


const fetchRentalByIdSuccess =(rental)=>{
  return {
    type:FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}

const fetchRentalByIdInit =()=>{
   return {
     type :FETCH_RENTAL_BY_ID_INIT,
     
   }
}

const fetchRentalSuccess =(rentals)=>{
  return {
    type:FETCH_RENTAL_SUCCESS,
    rentals
  }
}


export const fecthRentals =()=>{
     return  function(dispatch){
       axois.get(`http://localhost:3001/api/v1/rentals`).then((rentals)=>{
        dispatch(fetchRentalSuccess(rentals.data))

       })
     }
}

export const fetchRentalById=(id)=>{

  return function(dispatch){
    dispatch(fetchRentalByIdInit())
    //simulating server call

     axois.get(`http://localhost:3001/api/v1/rentals/${id}`).then(
       (rental)=>{
        dispatch(fetchRentalByIdSuccess(rental.data))
       }
     )
  }
}