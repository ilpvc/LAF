import service from "@/utils/request";
import {LoginParams} from "@/Interface/ApiInterface";

export const login = (params: LoginParams) =>
    service.request({
        url: `/login/`,
        method: "post",
        params: {},
        data: params
    });
