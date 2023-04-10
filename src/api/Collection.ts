import service from "@/utils/request";
import {Collection, CollectionQuery} from "@/Interface/ApiInterface";


export const getCollectionByCondition = (params: CollectionQuery) =>
    service.request({
        url: `/Collections/condition`,
        method: "post",
        params: {},
        data: params
    });

export const addCollections = (params: Collection) =>
    service.request({
        url: `/Collections/addCollections`,
        method: "post",
        params: {},
        data: params
    });

export const deleteCollections = (params: CollectionQuery) =>
    service.request({
        url: `/Collections/delete`,
        method: "post",
        params: {},
        data: params
    });

