import service from "@/utils/request";
import {LoginParams, Mail} from "@/Interface/ApiInterface";

export const login = (params: LoginParams) =>
    service.request({
        url: `/login/`,
        method: "post",
        params: {},
        data: params
    });

export const getEmailCode = (params: Mail) =>
  service.request<any>({
    url: `/login/mail`,
    method: "post",
    params: {},
    data: params
  });
