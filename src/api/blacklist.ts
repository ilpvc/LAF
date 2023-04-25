import {Blacklist, BlacklistQuery} from "@/Interface/ApiInterface";
import service from "@/utils/request";


export const addBlacklist = (params: Blacklist) =>
  service.request({
    url: `/blacklist/addBlacklist`,
    method: "post",
    params: {},
    data: params
  });

export const blacklistCondition = (params: BlacklistQuery) =>
  service.request({
    url: `/blacklist/condition`,
    method: "post",
    params: {},
    data: params
  });

export const deleteBlacklist = (params: BlacklistQuery) =>
  service.request({
    url: `/blacklist/delete`,
    method: "post",
    params: {},
    data: params
  });
