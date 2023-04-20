import Cookies from "js-cookie";

const TokenKey = 'Admin-Token'
const UserKey = 'user'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token:string) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function removeUser(){
    Cookies.remove(UserKey)
}

export function getLoginUser(){
    return Cookies.get(UserKey)
}