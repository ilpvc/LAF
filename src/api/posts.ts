import service from "@/utils/request"
import {Post, PostQuery} from "@/Interface/ApiInterface";

export function getAllPosts() {
    return service({
        url: `/post/`,
        method: "get",
        params: {},
        data: {}
    })
}

export function getPostByCondition(params: PostQuery){
    return service({
        url: `/post/condition`,
        method: "post",
        params: {},
        data: params
    })

}

export const updatePost = (params: Post) =>
    service.request({
        url: `/post/updateUser`,
        method: "put",
        params: {},
        data: params
    });
