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
    console.log('removeUser')
    console.log(Cookies.remove(UserKey))
    console.log(Cookies.get('user'))
    return
}