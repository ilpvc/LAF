import service from "@/utils/request.js";


export function getAllPorts(){
    return service({
        url: '/post/',
        method: 'get'
    })
}