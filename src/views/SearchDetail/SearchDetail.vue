<template>
  <div class="searchDetail">
    <div>
      <n-empty size="large" description="什么也没有" v-if="postsNum===0" class="empty">
      </n-empty>
      <Card v-else v-for="post in posts" :key="post.id" v-bind:pp="post"></Card>
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
let postsNum = ref(posts.length)
//初始化

watch(route,()=>{
  posts = postStore.getSearchPosts()
  postsNum.value = posts.length
  currentInstance?.proxy?.$forceUpdate()
})
onMounted(()=>{
})

</script>

<style scoped lang="less">
.searchDetail {
  display: flex;
  flex-direction: row;

  .empty{
    background-color: white;
    width: 700px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>