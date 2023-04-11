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
import {getAllPosts, getPostByCondition} from "@/api/posts";
import {getCurrentInstance, nextTick, onMounted, ref, watch} from "vue";
import {useWebStore} from "@/store/WebStore";
import {Type} from "@/Interface/enum";

const currentInstance = getCurrentInstance()
let ports = ref([])
let load = false
const webStore = useWebStore()

async function init() {
  //获取后端数据，将数据赋值，并且重新加载页面
  if (webStore.getPage === Type.ALL) {
    await getAllPosts().then(res => {
      ports.value = res.data.list
    })
  } else {
    await getPostByCondition({type: webStore.getPage}).then(res => {
      ports.value = res.data.list
    })
  }

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

<style scoped>
.index {
  display: flex;
  flex-direction: row;
}


</style>