import service from "@/utils/request.js";
import {User} from "@/Interface/ApiInterface";


export function getCacheUserById(id: number | undefined) {
    return service({
        url: `/user/cache/${id}`,
        method: "get",
        params: {},
        data: {}
    })
}

export function getAllUser(){
    return service({
        url: `/user/`,
        method: "get",
        params: {},
        data: {}
    })
}

export function getRankingUser(){
    return service({
        url: `/user/ranking`,
        method: "get",
        params: {},
        data: {}
    })
}

export const updateUser = (params: User) =>
    service.request({
        url: `/user/updateUser`,
        method: "put",
        params: {},
        data: params
    });
