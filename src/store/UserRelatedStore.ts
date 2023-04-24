import {defineStore} from "pinia";
import {ref, unref} from "vue";


export const useUserRelatedStore = defineStore('userRelatedStore',()=>{

  //定义当前的导航
  let nav =ref(0)
  function setNav(n:number){
    nav.value=n
  }
  function getNav(){
    return unref(nav)
  }



  return {
    setNav,
    getNav
  }


})