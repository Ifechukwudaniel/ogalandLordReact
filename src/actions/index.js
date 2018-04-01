import {
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_SUCCESS,
  FETCH_RENTALS_INIT,
  FETCH_RENTALS_FAIL,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from './types'

import axois from 'axios';
import { API_URL } from "../config/config"
import authService from "../services/auth-services"
import axiosService from '../services/axios-services';
import actions from 'redux-form/lib/actions';


const axiosInstance = axiosService.getInstance() 

//rental actions  -----------------------------------------


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

const fecthRentalInit = ()=>{
   return {
     type : FETCH_RENTALS_INIT
   }
}

const fecthRentalFail = (error) =>{
   return {
     type : FETCH_RENTALS_FAIL,
     error
   }
}

export const fecthRentals =(city)=>{
  const url = city ? `/rentals?city=${city}` :"/rentals"
     

     return  function(dispatch){
      dispatch(fecthRentalInit())
      axois.get(`${API_URL}/${url}`,{timeout:1000}).then((rentals)=>{
      dispatch(fetchRentalSuccess(rentals.data))
       }).catch(({response})=>{
            dispatch(fecthRentalFail(response.data.error))
       })
     }
}

export const fetchRentalById=(id)=>{

  return function(dispatch){
    dispatch(fetchRentalByIdInit())
      
     axois.get(`${API_URL}/rentals/${id}`, {timeout:1000}).then(
       (rental)=>{
        dispatch(fetchRentalByIdSuccess(rental.data))
       }
     )
  }
}




//Auth Actions --------------------------------------------------------------------

export const register =(userData)=>{
   return axois.post(`${API_URL}/users/register`,{...userData}).then(
     (res)=>{
     return res.data
     },
     (err)=>{
       return Promise.reject(err.response.data.error)
     }
   )
}

const loginFailure= (error)=>{
  return{
    type:LOGIN_FAILURE,
    error
  }

}

const loginSuccess= ()=>{
  return{
    type:LOGIN_SUCCESS,
  }

}
 export const login =(userData) =>{
    return dispatch=>{
       return axois.post(`${API_URL}/users/auth`,{...userData})
       .then(res=>res.data)
       .then(token=> {
         authService.saveToken(token)
         dispatch(loginSuccess())
       } ).catch((res)=>{
         dispatch(loginFailure(res.response.data.error))
       }
       )
  }
 }

 export const authStatus=() =>{
  return dispatch=>{
  if (authService.isAuthenticated()) {
     dispatch(loginSuccess())
  }    
 }
}

export const logout =()=>{
  authService.inValidateUser()
  return {
    type:LOGOUT
  }
}