<template>
  <div id="learn-index">
    <div class="lists">
      <div class="list">
        <List>
          <template #title>
            今日榜单
          </template>
        </List>
      </div>
      <div class="list">
        <List style="border-right: 1px solid #e5e6eb;border-left: 1px solid #e5e6eb;">
          <template #title>
            本周榜单
          </template>
        </List>
      </div>
      <div class="list">
        <List>
          <template #title>
            本月榜单
          </template>
        </List>
      </div>
    </div>

    <div class="body">
      <div class="body-header">
        <h3>全部文章</h3>
      </div>

      <div class="body-essay">
        <EssayCard v-for="post in posts" :key="post.id" :post="post"></EssayCard>
        <div class="footer" v-if="page===pages">
          已经到底了
        </div>
        <div class="footer" @click="getMorePosts" v-else>
          点击查看更多
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import List from "../components/List.vue";
import EssayCard from "../components/EssayCard.vue";
import {usePostStore} from "@/store/PostStore";
import {onBeforeMount, ref, unref} from "vue";
import {Post} from "@/Interface/ApiInterface";
import {pagePostCondition} from "@/api/posts";

const postStore = usePostStore();
const posts = ref<Post[]>([])
onBeforeMount(() => {
  posts.value = posts.value.concat(...postStore.getCurrentPagePost())
})

let page=2
let pages = 0
async function getMorePosts(){
  const morePosts = await pagePostCondition({types:[4]},page++,5);
  pages = morePosts.data.items.pages
  console.log(morePosts)
  posts.value = unref(posts).concat(morePosts.data.items.records)
}


</script>

<style scoped lang="less">
#learn-index {
  width: 580px;
  margin: 0 10px;

  .lists {
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    padding: 10px;
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin-top: 10px;
    background-color: white;

    .body-header {
      font-family: Avenir, serif;
      padding: 5px 10px;
      border-bottom: 1px #e5e6eb solid;
    }

    .body-essay {
      display: flex;
      flex-direction: column;

      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        &:hover {
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }

}
</style>