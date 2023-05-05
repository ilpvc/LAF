<template>
  <div id="essay-card">
    <n-skeleton v-if="!isLoad" text style="width: 60%;margin-bottom: 10px"/>

    <n-skeleton v-if="!isLoad" text style="width: 60%;margin-bottom: 10px"/>

    <n-skeleton v-if="!isLoad" text style="margin-bottom: 10px"/>

    <n-skeleton v-if="!isLoad" text style="width: 60%;margin-bottom: 10px"/>
    <div v-if="isLoad" class="header">
      <div class="header-name header-item" @click.stop="doGetUser(post.userNickname)">
        {{ post.userNickname }}
      </div>
      <span>|</span>
      <div class="header-time header-item">
        {{ moment(post.updatedTime).format('YYYY-MM-DD') }}
      </div>
      <span>|</span>
      <div class="header-tags header-item">
        {{ post.tags }}
      </div>
    </div>


    <div v-if="isLoad" class="body">

      <div class="left">
        <div class="title">
          <h3>{{ post.title }}</h3>
        </div>

        <div class="content">
          {{ post.content }}
        </div>

        <div class="footer">
          <ul class="footer">
            <li class="footer-item">
              <img class="image" src="./img/look.svg" alt="look">
              <span>{{ post.count }}</span>
            </li>
            <li class="footer-item" @click.stop="doDianZhan">
              <img v-if="!isLiked" class="image" src="./img/dianzan.svg" alt="dianzan"
                   style="position: relative;top: -2px"/>
              <img v-else class="image" src="./img/do_dianzan.svg" alt="dianzan" style="position: relative;top: -2px"/>
              <span>
                {{ post.likesNum }}
              </span>
            </li>
            <li class="footer-item">
              <img class="image" src="./img/comment.svg" alt="comment">
              <span>
                {{ post.commentNum }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="right">
        <n-image
          v-if="post.image!==''"
          width="100"
          class="right-image"
          :src="post.image">

        </n-image>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import {onMounted, ref, unref} from "vue";
import {Post} from "@/Interface/ApiInterface";
import {addLikes, deleteLikes, getLikesByCondition} from "@/api/Likes";
import moment from "moment";
import {updatePost} from "@/api/posts";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {useLoadingBar} from 'naive-ui'
import {getUserByCondition} from "@/api/user";
import {useUserDetailsStore} from "@/store/UserDetailsStore";
import {useRouter} from "vue-router";


const router = useRouter();
const userDetailsStore = useUserDetailsStore();
const loadingBar = useLoadingBar();
const webInfoStore = useWebInfoStore();
const props = defineProps(['post'])
const post = ref<Post>({...props.post})

const isLoad = ref(false)

async function init() {
  const likesRes = await getLikesByCondition({userId: webInfoStore.getUser.id, postId: post.value.id});
  if (likesRes.data.num === 0) {
    isLiked.value = false
  } else {
    isLiked.value = true
  }
  isLoad.value = true
}


const isLiked = ref(false)

async function doDianZhan() {
  loadingBar.start()
  let tempPost = post.value
  if (isLiked.value) {
    if (tempPost.likesNum === undefined) {
      tempPost.likesNum = 0
    } else {
      tempPost.likesNum = tempPost.likesNum - 1
    }
    await updatePost(tempPost)
    await deleteLikes({userId: webInfoStore.getUser.id, postId: unref(post).id})
    isLiked.value = !isLiked.value
  } else {
    if (tempPost.likesNum === undefined) {
      tempPost.likesNum = 1
    } else {
      tempPost.likesNum = 1 + tempPost.likesNum
    }
    await updatePost(tempPost)
    await addLikes({userId: webInfoStore.getUser.id, postId: unref(post).id})
    isLiked.value = !isLiked.value
  }
  loadingBar.finish()

}

//跳转用户页面
async function doGetUser(nickname: string) {
  loadingBar.start()
  const userConditionRes = await getUserByCondition({nickname: nickname})
  if (userConditionRes.data.list !== null)
    userDetailsStore.setUser(userConditionRes.data.list[0])
  loadingBar.finish()
  await router.push({
    name: 'blank',
    params: {
      name: nickname
    },
    query: {
      name: nickname
    }
  })
}

onMounted(() => {
  init()
})

</script>

<style scoped lang="less">

#essay-card {
  display: flex;
  flex-direction: column;
  width: 580px;
  padding: 10px 10px 0;
  border-bottom: 1px solid #e5e6eb;
  transition: background-color 0.4s;

  &:hover {
    background-color: #f1f2f6;
  }

  .header {
    display: flex;
    flex-direction: row;
    color: #9599a7;


    .header-item {
      cursor: pointer;

      &:hover {
        color: #646cff;

      }
    }

    span {
      padding: 0 15px;
    }
  }

  .body {
    display: flex;
    width: 580px;

    &:hover {
      cursor: pointer;
    }

    .left {
      width: 430px;

      .title {
        padding: 5px 0;
        font-weight: 900;
        font-family: 微软雅黑, serif;
      }

      .content {
        padding: 6px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
        line-height: 1rem;
      }

      .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        //padding: 5px 0;
        width: 400px;
        color: #8590a6;
        user-select: none;

        .footer-item {
          display: flex;
          align-items: center;
          width: 60px;

          .image {
            margin-right: 3px;
            opacity: 0.6;

          }
        }
      }
    }

    .right {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;

      .right-image {
        position: relative;
        top: -10px;
        border-radius: 10px;
      }
    }
  }

}
</style>