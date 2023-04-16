import axios from "axios";
import {getToken, removeToken} from "./auth";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {R} from "@/Interface/ApiInterface";
import {useRouter} from "vue-router";

const webInfoStore = useWebInfoStore()

const service = axios.create({
    baseURL: 'http://localhost:8080/lostandfound',
    timeout: 10000,

})

service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['Token'] = getToken()
            // config.headers['Content-Type'] = 'application/json'
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
        if (response.headers.status === '403') {
            removeToken()
            webInfoStore.removeUser
        }
        return res
    },
    error => {
        error.response.data.status = error.response.status
        return error.response.data
    }
)


export default service;