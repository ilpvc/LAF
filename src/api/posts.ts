import service from "@/utils/request"

export function getAllPosts() {
    return service({
        url: `/post/`,
        method: "get",
        params: {},
        data: {}
    })
}