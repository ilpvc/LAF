import service from "@/utils/request";
import {AttentionQuery} from "@/Interface/ApiInterface";

export const getAttentionCondition = (params: AttentionQuery) =>
    service.request({
        url: `/attention/condition`,
        method: "post",
        params: {},
        data: params
    });