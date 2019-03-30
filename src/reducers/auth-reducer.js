import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT} from '../actions/types'
  const IntialRentaks ={
     isAuth :false,
     error:[]
    }

  export const authReducer =(state = IntialRentaks, action) =>{
    switch (action.type) {
       case LOGIN_SUCCESS:
        return Object.assign({},state, {isAuth:true, error:[]});
    case LOGIN_FAILURE:
        return Object.assign({},state, {error:action.error})  
    case LOGOUT:
        return Object.assign({},state, {isAuth:false})  
     default:
            return state
    }
  }