import {LoginParams, UserQuery} from "@/Interface/ApiInterface";
import service from "@/utils/request";

export const register = (params: LoginParams) =>
    service.request({
        url: `/register/`,
        method: "post",
        params: {},
        data: params
    });
