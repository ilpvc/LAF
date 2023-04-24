import {defineStore} from "pinia";
import {ref, unref} from "vue";
import {User} from "@/Interface/ApiInterface";


export const useUserRelatedStore = defineStore('userRelatedStore',()=>{

  //定义当前的导航
  let nav =ref(0)
  function setNav(n:number){
    nav.value=n
  }
  function getNav(){
    return unref(nav)
  }

  let users = ref<User[]>()

  function setUsers(u:User[]){
    users.value = u
  }

  function getUsers(){
    return unref(users)
  }


  return {
    setNav,
    getNav,
    setUsers,
    getUsers
  }


})