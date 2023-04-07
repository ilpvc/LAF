import {defineStore} from "pinia";
import {ref} from "vue";
import {UserPostsType} from "@/Interface/enum";

const useUserStore = defineStore('userStore',()=>{
    const userPostsType = ref(UserPostsType.LIKE)


})