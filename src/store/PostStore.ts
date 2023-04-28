import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Post} from "@/Interface/ApiInterface";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {getLikesByCondition} from "@/api/Likes";

export const usePostStore = defineStore('postStore', () => {
  const postType = new Map()
  const postColor = new Map()

  postType.set(1, "失物贴")
  postType.set(2, "招领贴")
  postType.set(3, "其他贴")

  postColor.set(1, "error")
  postColor.set(2, "success")
  postColor.set(3, "info")

  const getPostType = computed(() => {
    return postType
  })
  const getPostColor = computed(() => {
    return postColor
  })

  const posts = ref<Post>()

  const getPosts = computed(() => {
    return posts.value
  })

  function setPosts(p: Post) {
    posts.value = p
  }


  let searchPost: Post[] = []

  function setSearchPost(posts: Post[]) {
    searchPost = posts
  }

  const getSearchPosts = () => {
    return searchPost
  }

  //查询所有的学习类文章
  let learnPosts: Post[] = []
  let myLearnPostsNum: number = 0
  let myLikesNum = 0
  async function setLearnPost(p: Post[]) {
    learnPosts = p
    const myPosts = p.filter((v) => v.userId === useWebInfoStore().getUser.id)
    myLearnPostsNum = myPosts.length
    const myLikePost = myPosts.map(v=>v.id)
    const likesRes = await getLikesByCondition({postIds:myLikePost})
    myLikesNum = likesRes.data.list.length
  }
  function getLearnPost() {
    return learnPosts
  }
  function getMyLearnPostsNum(){
    return myLearnPostsNum
  }

  function getMyLikesNum(){
    return myLikesNum
  }

  let currentPagePost:Post[] = []

  function setCurrentPagePost(p:Post[]){
    currentPagePost = p
  }

  function getCurrentPagePost(){
    return currentPagePost
  }

  let currentPost:Post = {count:0}

  function setCurrentPost(p:Post){
    currentPost = p
  }

  function getCurrentPost(){
    return currentPost
  }


  return {
    getPostType,
    getPostColor,
    setPosts,
    getPosts,
    setSearchPost,
    getSearchPosts,
    setLearnPost,
    getLearnPost,
    getMyLearnPostsNum,
    getMyLikesNum,
    setCurrentPagePost,
    getCurrentPagePost,
    setCurrentPost,
    getCurrentPost
  }
})