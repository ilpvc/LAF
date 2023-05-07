<template>
  <div id="related-message">
    <!--头部-->
    <div class="header">
      <n-card :title="'所有消息'+' 未读 '+messageStore.getAllMessageNum()" class="header-card" :bordered="false">
        <n-tabs type="line" animated justify-content="space-between">
          <n-tab-pane name="blacklist" tab="拉黑消息">
            <div v-if="showInfo">
              <n-skeleton height="40px" circle />
            </div>
            <div v-if="showInfo">
              <n-skeleton text :repeat="2" style="width: 700px"/> <n-skeleton text style="width: 60%" />
            </div>
            <div v-else v-for="blacklist of blacklists">
              <MessageUser :item="blacklist" :itemType="'blacklist'">拉黑了你</MessageUser>
            </div>
          </n-tab-pane>
          <n-tab-pane name="attention" tab="关注消息">
            <div v-for="attention of attentions">
              <MessageUser :item="attention" :itemType="'attention'"> 关注了你</MessageUser>
            </div>
          </n-tab-pane>
          <n-tab-pane name="collection" tab="收藏消息">
            <div v-for="collection of collections">
              <MessageUser :item="collection" :itemType="'collection'"> 收藏了你的文章</MessageUser>
            </div>
          </n-tab-pane>
          <n-tab-pane name="comment" tab="评论消息">

            <div v-for="comment of myComments">
              <MessageUser :item="comment" :itemType="'myComment'"> 在你的文章</MessageUser>
            </div>
            <div v-for="comment of comments">
              <MessageUser :item="comment" :itemType="'comment'"> 在你的文章</MessageUser>
            </div>
          </n-tab-pane>
          <n-tab-pane name="likes" tab="点赞消息">
            <div v-for="like of likes">
              <MessageUser :item="like" :itemType="'like'"> 点赞了你的文章</MessageUser>
            </div>
          </n-tab-pane>
          <n-tab-pane name="system" tab="系统消息">
            <div v-for="systemMessage of messages">
              <MessageUser :item="systemMessage" :itemType="'system'"> </MessageUser>
            </div>
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
import MessageUser from "../components/MessageUser.vue";
import {onBeforeMount, reactive, ref} from "vue";
import {blacklistCondition} from "@/api/blacklist";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {Attention, Blacklist, Collection, Comments, Likes, Message} from "@/Interface/ApiInterface";
import {getAttentionCondition} from "@/api/attention";
import {getPostByCondition} from "@/api/posts";
import {getCollectionByCondition} from "@/api/Collection";
import {getCommentCondition} from "@/api/comment";
import {getLikesByCondition} from "@/api/Likes";
import {getMessageByCondition} from "@/api/message";


const messageStore = useMessageStore();
const webInfoStore = useWebInfoStore();

const showInfo = ref(true)

let blacklists = reactive<Blacklist[]>([])
let attentions = reactive<Attention[]>([])
let collections = reactive<Collection[]>([])
let comments = reactive<Comments[]>([])
let myComments = reactive<Comments[]>([])
let likes = reactive<Likes[]>([])
let messages = reactive<Message[]>([])
onBeforeMount(async ()=>{
  const blacklistsRes = await blacklistCondition({otherUserId:webInfoStore.getUser.id});
  blacklists = blacklistsRes.data.list
  const attentionsRes = await getAttentionCondition({attentionedUserId: webInfoStore.getUser.id});
  attentions = attentionsRes.data.list
  const postsRes = await getPostByCondition({userId: webInfoStore.getUser.id});
  let postsIds = postsRes.data.list.map(v=>v.id)
  const collectionsRes = await getCollectionByCondition({postIds: postsIds});
  collections = collectionsRes.data.list
  const myPostCommentsRes = await getCommentCondition({postIds:postsIds})
  myComments = myPostCommentsRes.data.list
  const commentsRes = await getCommentCondition({commentedUserId:webInfoStore.getUser.id})
  comments = commentsRes.data.list
  const likesRes = await getLikesByCondition({postIds:postsIds})
  likes = likesRes.data.list

  const systemMessage4me = await getMessageByCondition({userId:webInfoStore.getUser.id,type:2});
  const allSystemMessage = await getMessageByCondition({type:1});
  messages = messages.concat(systemMessage4me.data.list)
  messages = messages.concat(allSystemMessage.data.list)
  showInfo.value=false
})


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