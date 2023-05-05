<template>
  <div id="related-message">
    <!--头部-->
    <div class="header">
      <n-card :title="'所有消息'+' '+messageStore.getAllMessageNum()" class="header-card" :bordered="false">
        <n-tabs type="line" animated justify-content="space-between">
          <n-tab-pane name="blacklist" tab="拉黑消息">
            <i v-for="blacklist of messageStore.getBlacklist()">
              {{blacklist.id}} 拉黑了你
            </i>
          </n-tab-pane>
          <n-tab-pane name="attention" tab="关注消息">
            <div v-for="attention of messageStore.getAttentions()">
              {{attention.id}} 拉黑了你
            </div>
          </n-tab-pane>
          <n-tab-pane name="collection" tab="收藏消息">
            <div v-for="collection of messageStore.getCollections()">
              {{collection.userId}} 收藏了你的帖子{{collection.postId}}
            </div>
          </n-tab-pane>
          <n-tab-pane name="comment" tab="评论消息">
            <div v-for="comments of messageStore.getMyPostComments()">
              {{comments.userName}} 在你的帖子{{comments.postId}} 下评论了{{comments.content}}
            </div>
          </n-tab-pane>
          <n-tab-pane name="likes" tab="点赞消息">
            七里香
          </n-tab-pane>
          <n-tab-pane name="system" tab="系统消息">
            七里香
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
    <div class="body">
      <n-scrollbar style="max-height: 700px">
        <n-empty v-if="false" description="什么都没有"></n-empty>


      </n-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useMessageStore} from "@/store/MessageStore";

const messageStore = useMessageStore();

</script>

<style scoped lang="less">

#related-message {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 730px;
  height: 800px;
  background-color: white;
  padding: 15px;

  .header {
    padding: 4px 0;
    width: 700px;
    background-color: white;
    height: 800px;
    .header-card {
      width: 100%;
      height: 100%;
    }

    span {
      font-size: 20px;
      font-family: "JetBrains Mono Light", ui-sans-serif;
      padding-right: 10px;
    }

  }

  .body {
  }
}
</style>