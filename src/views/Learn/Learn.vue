<template>
  <div class="learn_body">

    <div class="nav">

      <ul ref="allItem">
        <li class="nav-item" :class="{onFocus:isActive[0]}" @click="changeNav(0)">全部学科</li>
        <li class="nav-item" :class="{onFocus:isActive[1]}" @click="changeNav(1)">高等数学</li>
        <li class="nav-item" :class="{onFocus:isActive[2]}" @click="changeNav(2)">算法</li>
        <li class="nav-item" :class="{onFocus:isActive[3]}" @click="changeNav(3)">计算机</li>
        <li class="nav-item" :class="{onFocus:isActive[4]}" @click="changeNav(4)">四六级</li>
        <li class="nav-item" :class="{onFocus:isActive[5]}" @click="changeNav(5)">C语言</li>
        <li class="nav-item" :class="{onFocus:isActive[6]}" @click="changeNav(6)">其他</li>
      </ul>
    </div>

    <div class="center">
      <n-skeleton v-if="isLoad" circle></n-skeleton>
      <index v-else></index>
    </div>

    <div class="right">
      <UserInfo @search="refreshView"></UserInfo>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref, unref} from "vue";
import UserInfo from "./components/UserInfo.vue";
import Index from "./views/index.vue";
import {getPostByCondition, pagePostCondition} from "@/api/posts";
import {usePostStore} from "@/store/PostStore";
import {useLoadingBar, useMessage} from 'naive-ui'
import {useLearnStore} from "@/store/LearnStore";
import {addTaskUsers, getTaskUserByCondition} from "@/api/taskUser";
import {useWebInfoStore} from "@/store/WebInfoStore";

const allItem = ref()
const isActive = ref([
  true,
  false,
  false,
  false,
  false,
  false,
  false,
])

const postStore = usePostStore();
const loadingBar = useLoadingBar();

const isLoad = ref(false)
const learnStore = useLearnStore();

async function changeNav(nav: number) {
  isLoad.value = true
  learnStore.setCurrentNav(nav)
  isActive.value = [false, false, false, false, false, false, false]
  switch (nav) {
    case 0:
      await init('')
      break
    case 1:
      await init('高数')
      break
    case 2:
      await init('算法')
      break
    case 3:
      await init('计算机')
      break
    case 4:
      await init('四六级')
      break
    case 5:
      await init('C语言')
      break
    case 6:
      await init('其他')
      break
  }


  for (let i = 0; i < unref(isActive).length; i++) {
    if (i === nav) {
      unref(isActive).splice(i, 1, true)
    }
  }
}

async function init(tags: string) {
  const postsRes = await getPostByCondition({types: [4]});
  const pagePost = await pagePostCondition({types: [4], tags: tags}, 1, 5);
  postStore.setCurrentPagePost(pagePost.data.items.records)
  postStore.setPages(pagePost.data.items.pages)
  await postStore.setLearnPost(postsRes.data.list)
  isLoad.value = false
}

function refreshView(list, pages, searchContent) {
  isLoad.value = true
  learnStore.setSearchInfo(searchContent)
  setTimeout(() => {
    postStore.setCurrentPagePost(list)
    postStore.setPages(pages)
    isLoad.value = false
  }, 500)
}


const webInfoStore = useWebInfoStore();
const message = useMessage();

//完成学习浏览学习区域任务
async function finishLearnTask() {
  const taskUserRes = await getTaskUserByCondition({taskId: 10, userId: webInfoStore.getUser.id});
  if (taskUserRes.data.list.length === 0) {
    await addTaskUsers({taskId: 10, userId: webInfoStore.getUser.id})
    message.success('浏览学习区域 完成')
  }

}

onMounted(() => {

  finishLearnTask()
})
</script>

<style scoped lang="less">

.learn_body {
  display: flex;

  .nav {
    width: 150px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px 0;
    max-height: 400px;

    .nav-item {
      font-size: 16px;
      padding: 15px 20px;
      font-weight: 500;
      user-select: none;

      &:hover {
        user-select: none;
        background-color: #f9f9fa;
        cursor: pointer;
        color: #646cff;
      }

    }
  }

  .center {
    width: 600px;
  }
}

.onFocus {
  background-color: #eaf2ff;
  color: #646cff;
}
</style>