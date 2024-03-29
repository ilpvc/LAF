import service from "@/utils/request";
import {Report, ReportQuery} from "@/Interface/ApiInterface";

export const getReportByCondition = (params: ReportQuery) =>
    service.request({
        url: `/report/condition`,
        method: "post",
        params: {},
        data: params
    });


export const deleteReport = (id: number) =>
    service.request({
        url: `/report/${id}`,
        method: "delete",
        params: {},
        data: {}
    });


export const addReport = (params: Report) =>
    service.request({
        url: `/report/addReport`,
        method: "post",
        params: {},
        data: params
    });


export const updateReport = (params: Report) =>
    service.request({
        url: `/report/updateReport`,
        method: "put",
        params: {},
        data: params
    });

export const pageReportCondition = (
  params: ReportQuery,
  {
    pageNo,
    pageCount
  }: {
    pageNo: number;
    pageCount: number;
  }
) =>
  service.request({
    url: `/report/pageReportCondition/${pageNo}/${pageCount}`,
    method: "post",
    params: {},
    data: params
  });
