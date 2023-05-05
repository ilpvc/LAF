import {defineStore} from "pinia";
import {map} from "lodash";


export const useLearnStore = defineStore('learnStore',()=>{
  /**
   * 当前导航位置
   */
  let currentNav = 0
  function setCurrentNav(n){
    currentNav = n
  }
  function getCurrentNav(){
    return currentNav
  }

  /**
   * 搜索类容
   */
  let searchInfo = ''

  function setSearchInfo(s){
    searchInfo = s
  }

  function getSearchInfo(){
    return searchInfo
  }

  /**
   * 定义导航数字和名称的映射
   */
  let navMap = new Map()
  navMap.set(0,'')
  navMap.set(1,'高数')
  navMap.set(2,'算法')
  navMap.set(3,'计算机')
  navMap.set(4,'四六级')
  navMap.set(5,'C语言')
  navMap.set(6,'其他')

  function getNavMap(){
    return navMap
  }

  return {
    setCurrentNav,
    getCurrentNav,
    setSearchInfo,
    getSearchInfo,
    getNavMap
  }

});