import service from "@/utils/request";
import {Comments, CommentsQuery} from "@/Interface/ApiInterface";

export const getCommentCondition = (params: CommentsQuery) =>
    service.request({
        url: `/comments/condition`,
        method: "post",
        params: {},
        data: params
    });


export const getAllComments = () =>
    service.request({
        url: `/comments/`,
        method: "get",
        params: {},
        data: {}
    });


export const pageConfig_11 = (pageNo: number, pageCount: number) =>
    service.request({
        url: `/comments/pageComments/${pageNo}/${pageCount}`,
        method: "get",
        params: {},
        data: {}
    });

export const deleteComments = (id: number) =>
    service.request({
        url: `/comments/${id}`,
        method: "delete",
        params: {},
        data: {}
    });


export const getCommentsById = (id: number) =>
    service.request({
        url: `/comments/${id}`,
        method: "get",
        params: {},
        data: {}
    });

export const addComments = (params: Comments) =>
    service.request({
        url: `/comments/addComments`,
        method: "post",
        params: {},
        data: params
    });

export const updateComments = (params: Comments) =>
    service.request({
        url: `/comments/updateComments`,
        method: "put",
        params: {},
        data: params
    });

