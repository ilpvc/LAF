import axios from "axios";
import {getToken,removeToken} from "./auth";

const service = axios.create({
    baseURL: 'http://localhost:8080/lostandfound',
    timeout: 10000,

})

service.interceptors.request.use(
    config=> {
        if (getToken()){
            config.headers['Token']=getToken()
            config.headers['Content-Type'] = 'application/json'
        }
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        const res = response.data
        if (response.headers.code==="401"){
            removeToken()
        }
        return res
    }
)



export default service;