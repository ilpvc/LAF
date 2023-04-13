import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Post} from "@/Interface/ApiInterface";

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


    let searchPost:Post[] = []

    function setSearchPost(posts:Post[]){
        searchPost = posts
    }
    const getSearchPosts = ()=>{
        return searchPost
    }

    return {
        getPostType,
        getPostColor,
        setPosts,
        getPosts,
        setSearchPost,
        getSearchPosts
    }
})