<template>
  <div id="learn-index">
    <div class="lists">
      <div class="list">
        <List>
          <template #title>
            最多浏览
          </template>
          <template v-for="(countPost,index) in countRankPost" :key="index" #[index]>
            <i @click="toViewLearnPost(countPost)">{{ countPost.title }}</i>
          </template>
        </List>
      </div>
      <div class="list">
        <!--      <n-skeleton text :repeat="2" />-->
        <!--      <n-skeleton text style="width: 60%" />-->

        <List style="border-right: 1px solid #e5e6eb;border-left: 1px solid #e5e6eb;">
          <template #title>
            点赞榜
          </template>
          <template v-for="(likesPost,index) in likesRankPost" :key="index" #[index]>
            <i @click="toViewLearnPost(likesPost)">{{ likesPost.title }}</i>
          </template>
        </List>
      </div>
      <div class="list">

        <List>
          <template #title>
            争议贴
          </template>
          <template v-for="(commentPost,index) in commentRankPost" :key="index" #[index]>
            <i @click="toViewLearnPost(commentPost)">{{ commentPost.title }}</i>
          </template>
        </List>
      </div>
    </div>

    <div class="body">
      <div class="body-header">
        <h3>全部文章</h3>
        <n-button type="info" class="release-essay" @click="toWriteEssay">发布文章</n-button>
      </div>

      <div class="body-essay">
        <n-scrollbar style="max-height: 650px">
          <EssayCard v-for="post in posts" :key="post.id" :post="post" @click="toViewLearnPost(post)"></EssayCard>

          <div class="footer" v-if="page===pages">
            已经到底了
          </div>
          <div class="footer" @click="getMorePosts" v-else>
            点击查看更多
          </div>
        </n-scrollbar>
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
import {getRankPost, pagePostCondition} from "@/api/posts";
import {useRouter} from "vue-router";
import {useLoadingBar} from "naive-ui";

const postStore = usePostStore();
const posts = ref<Post[]>([])
const router = useRouter();
const loadingBar = useLoadingBar();

let page = 1
let pages = postStore.getPages()

async function getMorePosts() {
  const morePosts = await pagePostCondition({types: [4]}, ++page, 5);
  pages = morePosts.data.items.pages
  posts.value = unref(posts).concat(morePosts.data.items.records)
}

async function toWriteEssay() {
  loadingBar.start()
  await router.push({
    name: 'learnWrite'
  })
  loadingBar.finish()
}

//点击跳转到详情页面
function toViewLearnPost(p: Post) {
  postStore.setCurrentPost(p)
  router.push({
    name: 'viewLearnPost'
  })
}


const loadingFinish = ref(false)
const commentRankPost = ref<Post[]>([])
const likesRankPost = ref<Post[]>([])
const countRankPost = ref<Post[]>([])
onBeforeMount(async () => {
  posts.value = posts.value.concat(...postStore.getCurrentPagePost())
  const commentRankPostResponse = await getRankPost({rankType: 1,types:[4]});
  const likesRankPostResponse = await getRankPost({rankType: 2,types:[4]});
  const countRankPostResponse = await getRankPost({rankType: 3,types:[4]});
  commentRankPost.value = commentRankPostResponse.data.list
  likesRankPost.value = likesRankPostResponse.data.list
  countRankPost.value = countRankPostResponse.data.list
  loadingFinish.value = true
})
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
      display: flex;
      justify-content: space-between;
      font-family: Avenir, serif;
      padding: 5px 10px;
      border-bottom: 1px #e5e6eb solid;

      .release-essay {
        outline: none;
      }
    }

    .body-essay {
      display: flex;
      flex-direction: column;

      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        color: #2ecc71;

        &:hover {
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }

}
</style>