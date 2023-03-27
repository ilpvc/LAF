<template>
  <div class="index">
    <div>
      <Card v-show="load" v-for="port in ports" :key="port.id" v-bind:pp="port" ></Card>
    </div>
    <div>
      <NavigationCard v-if="load" v-bind:count="count"></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>

  </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card/Card.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
import {getAllPosts} from "@/api/posts";
import {getCurrentInstance, nextTick, onMounted, Ref, ref} from "vue";
import {getLikeKey} from "@/api/attribute.js";

const currentInstance = getCurrentInstance()
let ports = ref([])
let count = ref([])
let load =false
async function init(){
  //获取后端数据，将数据赋值，并且重新加载页面
  await getAllPosts().then(res=>{
    ports.value=res.data.list
  })

  await getLikeKey("complete").then(res=>{
    count.value = res.data.list
  })
  load=true
  currentInstance?.proxy?.$forceUpdate()

}

nextTick(()=>{
  // init()

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