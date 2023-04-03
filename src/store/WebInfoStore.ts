import {defineStore} from "pinia";
import {User} from "@/Interface/ApiInterface";
import {computed, ref} from "vue";


export const useWebInfoStore = defineStore('webInfoStore',()=>{

    const user = ref<User>({})

    const getUser = computed(() => {
        return user.value
    })

    function setUser(u:User){
        user.value= u
    }

    return {getUser,setUser}
})