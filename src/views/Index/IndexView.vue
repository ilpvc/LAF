<template>
  <div class="index">
    <div>
      <Card v-show="load" v-for="port in ports" :key="port.id" v-bind:pp="port"></Card>
    </div>
    <div>
      <NavigationCard></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>

  </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card/Card.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
import {getAllNormalPost, getPostByCondition} from "@/api/posts";
import {getCurrentInstance, nextTick, onMounted, ref, watch} from "vue";
import {useWebStore} from "@/store/WebStore";
import {Type} from "@/Interface/enum";
import {useHttpStatusStore} from "@/store/HttpStatusStore";
import {useRouter} from "vue-router";
import {useLoadingBar} from "naive-ui"

const loadingBar = useLoadingBar()
const router = useRouter()
const currentInstance = getCurrentInstance()
let ports = ref([])
let load = false
const webStore = useWebStore()

async function init() {
  loadingBar.start()
  //获取后端数据，将数据赋值，并且重新加载页面
  if (webStore.getPage === Type.ALL) {
    await getAllNormalPost().then(res => {
      ports.value = res.data.list
      if (useHttpStatusStore().getErrorStatus().has(res.status)){
        confirm("你还没有登录，请登录")
        router.push({name: 'login'})
      }
    })
  } else {
    const res = await getPostByCondition({type: webStore.getPage});
    ports.value = res.data.list
    if (useHttpStatusStore().getErrorStatus().has(res.status)){
      confirm("你还没有登录，请登录")
      await router.push({name: 'login'})
    }
  }
  loadingBar.finish()
  load = true
  currentInstance?.proxy?.$forceUpdate()

}

watch(()=>webStore.getPage,()=>{
  init()
})

nextTick(() => {

})

onMounted(() => {
  init()
})

</script>

<style scoped lang="less">

.index {
  display: flex;
  flex-direction: row;
}


</style>