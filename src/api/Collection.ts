import service from "@/utils/request";
import {CollectionQuery} from "@/Interface/ApiInterface";


export const getCollectionByCondition = (params: CollectionQuery) =>
    service.request({
        url: `/Collections/condition`,
        method: "post",
        params: {},
        data: params
    });
