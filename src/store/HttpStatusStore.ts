import {defineStore} from "pinia";
import {HttpStatus} from "@/Interface/enum";


export const useHttpStatusStore = defineStore('httpStatusStore', () => {
    const errorStatus = new Set()
    errorStatus.add(HttpStatus.FORBID)
    errorStatus.add(HttpStatus.NO_AUTH)

    function getErrorStatus(){
        return errorStatus
    }
    return {
        getErrorStatus
    }
})