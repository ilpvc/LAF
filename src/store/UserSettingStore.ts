import {defineStore} from "pinia";
import {UserSettings} from "@/Interface/ApiInterface";

export const useUserSettingStore = defineStore('useSettingStore',()=>{
  let loginUserSetting:UserSettings = {}
  function setLoginUserSetting(u:UserSettings){
    loginUserSetting = u
  }
  function getLoginUserSetting(){
    return loginUserSetting
  }

  return {
    setLoginUserSetting,
    getLoginUserSetting
  }


})