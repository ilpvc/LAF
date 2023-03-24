import service from "@/utils/request.js";


export function getCacheUserById(id: number | undefined) {
    return service({
        url: `/user/cache/${id}`,
        method: "get",
        params: {},
        data: {}
    })
}