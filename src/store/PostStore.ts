import {defineStore} from "pinia";
import {computed} from "vue";

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
    return {getPostType,getPostColor}
})