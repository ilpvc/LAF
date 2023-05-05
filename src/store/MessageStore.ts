import {defineStore} from "pinia";
import {Attention, Blacklist, Collection, Comments, Likes} from "@/Interface/ApiInterface";

export const useMessageStore = defineStore('messageStore', () => {


  /**
   * 与我相关的拉黑通知
   */
  let blacklist: Blacklist[] = []

  function setBlacklist(b: Blacklist[]) {
    blacklist = b
  }

  function getBlacklist() {
    return blacklist
  }

  /**
   * 与我相关的关注信息
   */
  let attentions: Attention[] = []

  function setAttentions(a: Attention[]) {
    attentions = a
  }

  function getAttentions() {
    return attentions
  }

  /**
   * 与我相关的收藏信息
   */
  let collections: Collection[] = []

  function setCollections(c: Collection[]) {
    collections = c
  }

  function getCollections() {
    return collections
  }

  /**
   * 我的帖子收到的评论
   */
  let myPostComments: Comments[] = []

  function setMyPostComments(s: Comments[]) {
    myPostComments = s
  }

  function getMyPostComments() {
    return myPostComments
  }

  /**
   * 我的评论被回复的通知
   */
  let comments: Comments[] = []

  function setComments(s: Comments[]) {
    comments = s
  }

  function getComments() {
    return comments
  }

  /**
   * 与我相关的点赞
   */
  let likes: Likes[] = []

  function setLikes(l: Likes[]) {
    likes = l
  }

  function getLikes() {
    return likes
  }

  /**
   * 全部的消息数量
   */
  let allMessageNum = 0

  function setAllMessageNum(n:number){
    allMessageNum = n
  }

  function getAllMessageNum(){
    return allMessageNum
  }

  return {
    setBlacklist,
    getBlacklist,
    setAttentions,
    getAttentions,
    setCollections,
    getCollections,
    setMyPostComments,
    getMyPostComments,
    setComments,
    getComments,
    setLikes,
    getLikes,
    setAllMessageNum,
    getAllMessageNum
  }

});