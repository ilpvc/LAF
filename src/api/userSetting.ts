import service from "@/utils/request";
import {UserSettings} from "@/Interface/ApiInterface";

export const getAllUserSettings = () =>
  service.request({
    url: `/user-settings/`,
    method: "get",
    params: {},
    data: {}
  });


export const pageConfigUserSetting = (pageNo: number, pageCount: number) =>
  service.request({
    url: `/user-settings/pageUserSettings/${pageNo}/${pageCount}`,
    method: "get",
    params: {},
    data: {}
  });


export const deleteUserSettings = (id: number) =>
  service.request({
    url: `/user-settings/${id}`,
    method: "delete",
    params: {},
    data: {}
  });


export const getUserSettingsById = (id: number| any) =>
  service.request({
    url: `/user-settings/${id}`,
    method: "get",
    params: {},
    data: {}
  });


export const addUserSettings = (params: UserSettings) =>
  service.request({
    url: `/user-settings/addUserSettings`,
    method: "post",
    params: {},
    data: params
  });


export const updateUserSettings = (params: UserSettings) =>
  service.request({
    url: `/user-settings/updateUserSettings`,
    method: "put",
    params: {},
    data: params
  });
