import service from "@/utils/request";

export const getAllTasks = () =>
    service.request({
        url: `/tasks/`,
        method: "get",
        params: {},
        data: {}
    });
