import service from "@/utils/request";
import {LoginParams, Mail, UserSecurity} from "@/Interface/ApiInterface";

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

export const verificationMailbox = (params: Mail) =>
  service.request({
    url: `/register/email`,
    method: "post",
    params: {},
    data: params
  });


export const resetPassword = (params: UserSecurity) =>
  service.request({
    url: `/user/reset`,
    method: "post",
    params: {},
    data: params
  });

