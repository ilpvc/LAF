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
    if (Object.keys(params).length!==0)
    params.status=[1,5]
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


export const addPost = (params: Post) =>
    service.request({
        url: `/post/addPost`,
        method: "post",
        params: {},
        data: params
    });

export function getAllNormalPost(){
    let params: PostQuery = {}
    params.status=[1,5]
    return service({
        url: `/post/condition`,
        method: "post",
        params: {},
        data: params
    })

}