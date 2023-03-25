<template>
  <div class="index">
    <div>
      <Card v-show="load" v-for="port in ports" :key="port.id" v-bind:pp="port" ></Card>
    </div>
    <div>
      <NavigationCard v-show="load" v-bind:count="count"></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>

  </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card/Card.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
import {getAllPosts} from "@/api/posts";
import {getCurrentInstance, nextTick, onMounted, ref} from "vue";
import {getLikeKey} from "@/api/attribute.js";
import {AttributeQuery} from "@/Interface/ApiInterface";

const currentInstance = getCurrentInstance()
let ports = ref([])
let count:AttributeQuery[] = []
let load =false
function init(){
  //获取后端数据，将数据赋值，并且重新加载页面
  getAllPosts().then(res=>{
    ports.value=res.data.list
    if (count !== null){
      load=true
      currentInstance?.proxy?.$forceUpdate()
    }
  })

  getLikeKey("complete").then(res=>{
    count = res.data.list
    console.log(count)
    if (ports.value !== null){
      load=true
      currentInstance?.proxy?.$forceUpdate()
    }
  })

}

nextTick(()=>{
  init()

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