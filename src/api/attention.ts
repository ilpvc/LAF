import service from "@/utils/request";
import {Attention, AttentionQuery} from "@/Interface/ApiInterface";

export const getAttentionCondition = (params: AttentionQuery) =>
    service.request({
        url: `/attention/condition`,
        method: "post",
        params: {},
        data: params
    });

export const addAttention = (params: Attention) =>
    service.request({
        url: `/attention/addAttention`,
        method: "post",
        params: {},
        data: params
    });


export const deleteAttention = (params: AttentionQuery) =>
    service.request({
        url: `/attention/delete`,
        method: "post",
        params: {},
        data: params
    });
