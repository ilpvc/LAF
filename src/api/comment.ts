import service from "@/utils/request";
import {CommentsQuery} from "@/Interface/ApiInterface";

export const getCommentCondition = (params: CommentsQuery) =>
    service.request({
        url: `/comments/condition`,
        method: "post",
        params: {},
        data: params
    });
