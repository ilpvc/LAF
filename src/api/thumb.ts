import service from "@/utils/request";

export const getPostIdByLikeUserId = (id: number) => (
    service.request({
        url: `/likes/User/${id}`,
        method: "get",
        params: {},
        data: {}
    })
)
