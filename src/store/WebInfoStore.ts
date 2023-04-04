import {defineStore} from "pinia";
import {User} from "@/Interface/ApiInterface";
import {computed, ref} from "vue";
import Cookies from "js-cookie";

export const useWebInfoStore = defineStore('webInfoStore',()=>{

    const user = ref<User>({})

    const getUser = computed(() => {
        if (Cookies.get('user')!==undefined){
            user.value = JSON.parse(Cookies.get("user"))

        }
        return user.value
    })

    function setUser(u:User){
        Cookies.set("user",JSON.stringify(u))
        user.value= u
    }

    function removeUser(){
        user.value= {}
    }

    return {getUser,setUser,removeUser}
})