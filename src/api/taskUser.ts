import service from "@/utils/request";
import {TaskUserQuery, TaskUsers} from "@/Interface/ApiInterface";

export const getAllTaskUsers = () =>
  service.request({
    url: `/taskUsers/`,
    method: "get",
    params: {},
    data: {}
  });


export const pageTaskUserConfig = (pageNo: number, pageCount: number) =>
  service.request({
    url: `/taskUsers/pageTaskUsers/${pageNo}/${pageCount}`,
    method: "get",
    params: {},
    data: {}
  });

export const deleteTaskUsers = (id: number) =>
  service.request({
    url: `/taskUsers/${id}`,
    method: "delete",
    params: {},
    data: {}
  });

export const getTaskUsersById = (id: number) =>
  service.request({
    url: `/taskUsers/${id}`,
    method: "get",
    params: {},
    data: {}
  });


export const addTaskUsers = (params: TaskUsers) =>
  service.request({
    url: `/taskUsers/addTaskUsers`,
    method: "post",
    params: {},
    data: params
  });

export const updateTaskUsers = (params: TaskUsers) =>
  service.request({
    url: `/taskUsers/updateTaskUsers`,
    method: "put",
    params: {},
    data: params
  });


export const getTaskUserByCondition = (params: TaskUserQuery) =>
  service.request({
    url: `/taskUsers/condition`,
    method: "post",
    params: {},
    data: params
  });

