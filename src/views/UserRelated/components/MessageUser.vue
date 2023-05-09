<template>

  <div id="message-user">

    <div v-if="showInfo" class="header">
      <div class="header-image">
        <n-avatar
          round
          :size="45"
          :src="itemType==='system'?'src/assets/system_header.png':user.header"
        />
      </div>

      <div class="body">
        <div>
          {{ user.nickname }}
          <slot></slot>
          <a v-if="post!==null&&post.id!==undefined" style="color: #646cff">{{post.title|| '此贴已删除'}}
            {{ itemType==='comment'||itemType==='myComment'? ' 发表 ': '' }} </a>
          <a v-if="post===null&&itemType==='comment'||itemType==='myComment'" style="color: #646cff">{{'此贴已删除'}}</a>
          <n-ellipsis style="max-width: 340px">
            {{ item.content }}
          </n-ellipsis>
        </div>
        <div class="motor">
          {{ moment(item.createdTime).format('YYYY-MM-DD HH:mm:ss') }}
        </div>
      </div>
    </div>
    <n-badge v-if="item.status===0" class="message-badge" value="新"/>
  </div>
</template>

<script setup lang="ts">
import {useMessage, useLoadingBar} from 'naive-ui'
import {onBeforeMount, onMounted, reactive, ref, unref} from "vue";
import {Attention, Blacklist, Collection, Post, User} from "@/Interface/ApiInterface";
import {updateAttention} from "@/api/attention";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {updateBlacklist} from "@/api/blacklist";
import {getUserById} from "@/api/user";
import moment from "moment";
import {getPostById} from "@/api/posts";
import {updateCollections} from "@/api/Collection";
import {updateComments} from "@/api/comment";
import {updateLikes} from "@/api/Likes";

const loadingBar = useLoadingBar();
const webInfoStore = useWebInfoStore();
const message = useMessage();


const props = defineProps(['item', 'itemType']);
const item = reactive({...props.item})
const itemType = props.itemType

let post = reactive<Post>({count:0})
let user = reactive<User>({})
const showInfo = ref(false)

async function init() {

  switch (itemType) {
    case 'blacklist':
      const userRes1 = await getUserById(item.userId)
      let tempItemBlacklist:Blacklist = {...unref(item)}
      if (tempItemBlacklist.status!==3) {
        tempItemBlacklist.status = 1
        await updateBlacklist(tempItemBlacklist)
      }
      user = userRes1.data.item
      break
    case 'attention':
      const userRes2 = await getUserById(item.attentionUserId)
      user = userRes2.data.item
      let attentionTempItem:Attention = {...unref(item)}
      if (attentionTempItem.status!==3){
        attentionTempItem.status = 1
        await updateAttention(attentionTempItem)
      }
      break
    case 'collection':
      const userRes3 = await getUserById(item.userId)
      user = userRes3.data.item
      const postRes3 = await getPostById(item.postId)
      post = postRes3.data.item
      let collectionTempItem:Collection = {...unref(item)}
      if (collectionTempItem.status!==3) {
        collectionTempItem.status = 1
        await updateCollections(collectionTempItem)
      }
      break
    case 'myComment':
      const userRes4 = await getUserById(item.commenterId)
      user = userRes4.data.item
      const postRes4 = await getPostById(item.postId)
      post = postRes4.data.item
      let myCommentTempItem = {...unref(item)}
      if (myCommentTempItem.status!==3) {
        myCommentTempItem.status = 1
        await updateComments(myCommentTempItem)
      }
      break
    case 'comment':
      const userRes5 = await getUserById(item.commenterId)
      user = userRes5.data.item
      const postRes5 = await getPostById(item.postId)
      post = postRes5.data.item
      let commentTempItem = {...unref(item)}
      if (commentTempItem.status!==3) {
        commentTempItem.status = 1
        await updateComments(commentTempItem)
      }
      break
    case 'like':
      const userRes6 = await getUserById(item.userId)
      user = userRes6.data.item
      const postRes6 = await getPostById(item.postId)
      post = postRes6.data.item
      let likeTempItem = {...unref(item)}
      if (likeTempItem.status!==3) {
        likeTempItem.status = 1
        await updateLikes(likeTempItem)
      }
      break
    case 'system':
      // const userRes7 = await getUserById(item.userId)
      // user = userRes7.data.item
      // let system = {...unref(item)}
      // likeTempItem.status = 1
      // await updateLikes(likeTempItem)
      break
  }
  showInfo.value = true
}

onBeforeMount(() => {


})
onMounted(() => {
  init()
})
</script>

<style scoped lang="less">

#message-user {
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
  width: 640px;

  .header {
    display: flex;
    align-items: center;

    .header-image {

    }

    .body {
      font-size: 16px;
      font-family: "微软雅黑", serif;
      margin-left: 20px;

      .motor {
        font-size: 16px;
        color: #8590a6;
      }

    }
  }

}
</style>