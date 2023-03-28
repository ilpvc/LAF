import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useWebStore = defineStore('web', () => {
    const page = ref(0)


    const getPage=computed(()=>{
        return page.value
    })

    function changePage(p: number) {
        page.value = p;
    }

    return { changePage,getPage}
})