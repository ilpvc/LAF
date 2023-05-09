import service from "@/utils/request.js";
import {R, User, UserQuery, UserSecurity, UserSecurityQuery} from "@/Interface/ApiInterface";
import {UnwrapRef} from "vue";


export function getCacheUserById(id: number | undefined) {
  return service({
    url: `/user/cache/${id}`,
    method: "get",
    params: {},
    data: {}
  })
}

export function getAllUser() {
  return service({
    url: `/user/`,
    method: "get",
    params: {},
    data: {}
  })
}

export function getRankingUser() {
  return service({
    url: `/user/ranking`,
    method: "get",
    params: {},
    data: {}
  })
}

export const updateUser = (params: User) =>
  service.request({
    url: `/user/updateUser`,
    method: "put",
    params: {},
    data: params
  });


export const updateUserSecurity = (params: UserSecurity) =>
  service.request<R>({
    url: `/user/updateAccount`,
    method: "put",
    params: {},
    data: params
  });


export const getUserById = (id: UnwrapRef<User["id"]> | undefined) =>
  service.request({
    url: `/user/${id}`,
    method: "get",
    params: {},
    data: {}
  });

export const getUserByCondition = (params: UserQuery) =>
  service.request({
    url: `/user/condition`,
    method: "post",
    params: {},
    data: params
  });

export const deleteUser = (id: number | any) =>
  service.request({
    url: `/user/${id}`,
    method: "delete",
    params: {},
    data: {}
  });
