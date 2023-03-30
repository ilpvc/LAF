import service from "@/utils/request"
import {PostQuery} from "@/Interface/ApiInterface";

export function getAllPosts() {
    return service({
        url: `/post/`,
        method: "get",
        params: {},
        data: {}
    })
}

export function getPostByType(params: PostQuery){
    console.log(params)
    return service({
        url: `/post/condition`,
        method: "post",
        params: {},
        data: params
    })

}