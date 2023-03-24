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

<script setup>
import Card from "@/components/Card/Card.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
import {getAllPosts} from "@/api/posts.js";
import {getCurrentInstance, nextTick, onMounted, ref} from "vue";

const currentInstance = getCurrentInstance()
let ports = ref([])
let load =false
function init(){
  //获取后端数据，将数据赋值，并且重新加载页面
  getAllPosts().then(res=>{
    ports.value=res.data.list
    load=true
    currentInstance.proxy.$forceUpdate()
  })
}
nextTick(()=>{

})

onMounted(()=>{
  init()
})
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: row;
}


</style>