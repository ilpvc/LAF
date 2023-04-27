import {defineStore} from "pinia";
import {Likes} from "@/Interface/ApiInterface";

export const useLikesStore = defineStore('likesStore', ()=>{
  /**
   * 获取所有的点赞数据
   */
  let likes:Likes[] = []


  function setLikes(l:Likes[]){
    likes = l
  }
  function getLikes(){
    return likes
  }

  return {
    setLikes,
    getLikes
  }

})