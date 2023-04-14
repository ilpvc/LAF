import {defineStore} from "pinia";
import {User} from "@/Interface/ApiInterface";


export const useUserDetailsStore = defineStore("userDetailsStore",()=>{

    let user:User = {}

    function setUser(u:User){
        localStorage.setItem("userDetails",JSON.stringify(u))
        user = u
    }

    function getUser(){
        if (Object.keys(user).length===0&&localStorage.getItem("userDetails")!==null){
            // @ts-ignore
            user = JSON.parse(localStorage.getItem("attentions"))
        }
        return user
    }

    return {
        setUser,
        getUser
    }


});