import service from "@/utils/request";
import {ReportQuery} from "@/Interface/ApiInterface";

export const getReportByCondition = (params: ReportQuery) =>
    service.request({
        url: `/report/condition`,
        method: "post",
        params: {},
        data: params
    });
