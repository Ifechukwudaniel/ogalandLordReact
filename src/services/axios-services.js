import axios from 'axios';
import AuthService from './auth-services';
import  {API_URL} from '../config/config'

class AxiosService {
    
    axiosInstance ={};

    constructor(){
        this.initInstance()
    }

    initInstance(){
     this.axiosInstance = axios.create({
        baseURL:`${API_URL}`,
        timeout:10000
     })
     this.axiosInstance.interceptors.request.use(
         (config)=>{
             const token = AuthService.getToken();
             
             if (token) {
               config.headers.Authorization = `Bearer ${token}`
             }

             return config
     })

      return this.axiosInstance

    }
     

    getInstance(){
       return this.axiosInstance|| this.initInstance()
    }

}

export default  new AxiosService();