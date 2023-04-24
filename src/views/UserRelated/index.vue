<template>
  <div id="user-related">

    <div class="nav">

      <ul ref="allItem">
        <li class="nav-item" :class="{onFocus:isActive[0]}" @click="changeNav(0)">
<!--          <img src="./img/attention.svg" alt="attention">-->
          我的关注
        </li>
        <li class="nav-item" :class="{onFocus:isActive[1]}" @click="changeNav(1)">我的消息</li>
        <li class="nav-item" :class="{onFocus:isActive[2]}" @click="changeNav(2)">黑名单</li>
      </ul>
    </div>

    <div class="body">
      <router-view></router-view>
    </div>

  </div>
</template>

<script setup lang="ts">

import {onBeforeMount, ref, unref} from "vue";
import {useRouter} from "vue-router";
import {useUserRelatedStore} from "@/store/UserRelatedStore";
import {useLoadingBar} from 'naive-ui'
import {User} from "@/Interface/ApiInterface";
import {Nav} from "./enums/nav";
import {getAttentionCondition} from "@/api/attention";
import {getUserByCondition} from "@/api/user";
import {useWebInfoStore} from "@/store/WebInfoStore";

const loadingBar = useLoadingBar();
const userRelatedStore = useUserRelatedStore();
const router = useRouter();
const isActive = ref([
  true,
  false,
  false,
  false,
  false,
  false,
  false,
])


//我的关注拉黑消息导航栏控制
let navMap = new Map()
const webInfoStore = useWebInfoStore();
async function changeNav(nav: number) {
  loadingBar.start()
  if (nav===Nav.ATTENTION){
    const attentionRes = await getAttentionCondition({attentionUserId:webInfoStore.getUser.id});
    const useIds = attentionRes.data.list.map((v)=>v.attentionedUserId)
    const userRes = await getUserByCondition({userIds: useIds});
    const users = userRes.data.list
    userRelatedStore.setUsers(users)
    userRelatedStore.setNav(Nav.ATTENTION)
  }
  await router.push({
    name: navMap.get(nav)
  })
  isActive.value = [false, false, false, false, false, false, false]
  for (let i = 0; i < unref(isActive).length; i++) {
    if (i === nav) {
      unref(isActive).splice(i, 1, true)
    }
  }

  loadingBar.finish()
}


onBeforeMount(() => {
  navMap.set(0, 'attention')
  navMap.set(1, 'message')
  navMap.set(2, 'blacklist')
  changeNav(userRelatedStore.getNav())
})
</script>

<style scoped lang="less">

#user-related {
  display: flex;

  .nav {
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px 0;
    max-height: 200px;
    .nav-item {
      display: flex;
      align-items: center;
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

  .body {
    width: 750px;
  }
}


.onFocus {
  background-color: #eaf2ff;
  color: #646cff;
}
</style>