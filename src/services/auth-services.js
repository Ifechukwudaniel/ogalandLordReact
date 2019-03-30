import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';

class AuthService{
      tokenKey ='auth_token'


    /// get Token
      getToken(){
          return localStorage.getItem(this.tokenKey)
      }

// decodes token
      decode(token) {
          return jwt.decode(token)
      }
//save token

    saveToken(token){
        localStorage.setItem(this.tokenKey, token)
    }

    getExpiration(token){
        debugger;
     const exp = this.decode(token).exp

     return moment.unix(exp)
    }

    isValid(token){
        if (token) {
            return   moment().isBefore(this.getExpiration(token))  
        } else {
             return false
        }

    }

    isAuthenticated(){
        const token = this.getToken()
     return this.isValid(token) ? true: false
    }
    inValidateUser (){
        localStorage.removeItem(this.tokenKey)
    }

}
export default new AuthService();