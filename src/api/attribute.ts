import service from "@/utils/request";
import {Attribute} from "@/Interface/ApiInterface";

export function getByKey(key: string | null) {
    return service({
        url: `/attribute/${key}`,
        method: "get",
        params: {},
        data: {}
    })
}

export function getLikeKey(key: string | null) {
    return service({
        url: `/attribute/like/${key}`,
        method: "get",
        params: {},
        data: {}
    })
}

export function getOnlyKey(key: string | null) {
    return service({
        url: `/attribute/only/${key}`,
        method: "get",
        params: {},
        data: {}
    })
}

export const updateAttrByKey = (params: Attribute) =>
  service.request({
      url: `/attribute/update`,
      method: "post",
      params: {},
      data: params
  });



