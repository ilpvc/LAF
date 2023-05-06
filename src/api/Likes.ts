import service from "@/utils/request";
import {Likes, LikesQuery} from "@/Interface/ApiInterface";
export const getLikesByCondition = (params: LikesQuery) =>
    service.request({
        url: `/likes/condition`,
        method: "post",
        params: {},
        data: params
    });

export const addLikes = (params: Likes) =>
    service.request({
        url: `/likes/addLikes`,
        method: "post",
        params: {},
        data: params
    });


export const deleteLikes = (params: LikesQuery) =>
    service.request({
        url: `/likes/delete`,
        method: "post",
        params: {},
        data: params
    });


export const allLikes = () =>
  service.request({
    url: `/likes/`,
    method: "get",
    params: {},
    data:{}
  });

export const updateLikes = (params: Likes) =>
  service.request({
    url: `/likes/updateLikes`,
    method: "put",
    params: {},
    data: params
  });