import {defineStore} from "pinia";
import {Comments} from "@/Interface/ApiInterface";
import {getAllUser} from "@/api/user";

export const useCommentStore = defineStore("commentStore", () => {

  let comments: Comments[] = []

  async function setComment(c: Comments[]) {
    comments = []
    const userResponse = await getAllUser();
    // const postResponse = await getAllPosts();
    let userNameMap = new Map()
    let userHeaderMap = new Map()

    for (const user of userResponse.data.list) {
      userNameMap.set(user.id, user.nickname)
    }
    for (const user of userResponse.data.list) {
      userHeaderMap.set(user.id, user.header)
    }

    for (const comment of c) {
      if (comment.commentType === 1) {
        comment.userName = userNameMap.get(comment.commenterId)
        comment.userHeader = userHeaderMap.get(comment.commenterId)
        for (const comment1 of c) {
          if (comment1.commentType === 2 && comment1.parentId === comment.id) {
            let tempComment:Comments[] = []
            comment1.userName = userNameMap.get(comment1.commenterId)
            comment1.userHeader = userHeaderMap.get(comment1.commenterId)
            comment1.userName2 = userNameMap.get(comment1.commentedUserId)
            tempComment.push(comment1)
            comment.childComment=tempComment
          }
        }
        comments.push(comment)
      }
    }

  }

  function getComments(){
    return comments
  }



  let currentCommenter = new Map()

  function setCurrentCommenter(id:number,name:string){
    currentCommenter.clear()
    currentCommenter.set('info', {id,name})
  }

  function getCurrentCommenter(){
    return currentCommenter
  }

  return {
    setComment,
    getComments,
    setCurrentCommenter,
    getCurrentCommenter
  }

})