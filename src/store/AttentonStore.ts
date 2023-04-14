import {defineStore} from "pinia";
import {Attention} from "@/Interface/ApiInterface";
import {getToken} from "@/utils/auth";

export const useAttentionStore = defineStore('attentionStore', () => {
    let attentions:Attention[] = []

    function getAttentions(){
        if (getToken()===undefined){
            attentions=[]
        } else if (attentions.length===0&&localStorage.getItem("attentions")!==null){
            // @ts-ignore
            attentions = JSON.parse(localStorage.getItem("attentions"))
        }
        return attentions
    }
    function setAttentions(a:Attention[]){
        localStorage.setItem("attentions",JSON.stringify(a))
        attentions = a
    }
    return {
        getAttentions,
        setAttentions
    }
})