<template>
  <div class="searchDetail">
    <div>
      <Card v-for="post in posts" :key="post.id" v-bind:pp="post"></Card>
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
import {useRoute} from "vue-router";
import {getCurrentInstance, onMounted, ref, watch} from "vue";
import {Post} from "@/Interface/ApiInterface";
import {usePostStore} from "@/store/PostStore";

const postStore = usePostStore();
const currentInstance = getCurrentInstance();
const route = useRoute()
let posts:Post[]  = postStore.getSearchPosts()
//初始化
function init(){

}
watch(route,()=>{
  posts = postStore.getSearchPosts()
  currentInstance?.proxy?.$forceUpdate()
})
onMounted(()=>{
  init()
})

</script>

<style scoped lang="less">
.searchDetail {
  display: flex;
  flex-direction: row;
}
</style>