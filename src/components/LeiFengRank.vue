<template>
  <div class="body">

    <div class="header">
      <svg t="1678433436523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1268" width="24" height="24">
        <path
            d="M941.4 928.3H82c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h859.4c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z"
            fill="#FF7878" p-id="1269"></path>
        <path
            d="M834 418.9c19.7 0 35.8 16.9 35.8 37.7v433.9h-197V418.9H834m0-37.7H637v547.1h268.6V456.7c0-41.7-32-75.5-71.6-75.5z"
            fill="#FF7878" p-id="1270"></path>
        <path
            d="M601.2 136c19.7 0 35.8 16.9 35.8 37.7v716.9H386.4V173.7c0-20.8 16.1-37.7 35.8-37.7h179m0-37.8h-179c-39.6 0-71.6 33.8-71.6 75.5v754.6h322.3V173.7c0-41.7-32.1-75.5-71.7-75.5z"
            fill="#FF7878" p-id="1271"></path>
        <path
            d="M350.6 286.9v603.7h-197v-566c0-20.8 16.1-37.7 35.8-37.7h161.2m35.8-37.7h-197c-39.6 0-71.6 33.8-71.6 75.5v603.7h268.6V249.2z"
            fill="#FF7878" p-id="1272"></path>
      </svg>
      <i style="color: #444444;padding-left: 5px">
        雷锋榜
      </i>
    </div>

    <div class="item" v-for="user in users" :key="user.id">
      <div class="header-detail">
        <n-avatar
            size="large"
            :src="user.header"
        />
        <div class="header-detail-dd">
          <div>
            <i class="user_name" style="size: 12px;color: #646cff" @click="doGetUser(user.nickname)">{{
                user.nickname
              }}</i>
          </div>
          <i style="size: 12px">总共寻回{{ user.findNum }}次物品</i>
        </div>
      </div>
      <div>
        <n-tag v-if="!attentionsSet.has(user.id)" type="info" class="item_attention" @click="doAddAttention(user.id)">
          + 关注
        </n-tag>
        <n-tag v-if="attentionsSet.has(user.id)" type="error" class="item_attention"
               @click="doDeleteAttention(user.id)">
          取消关注
        </n-tag>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {getRankingUser, getUserByCondition} from "@/api/user";
import {getCurrentInstance, onMounted, ref} from "vue";
import {Attention, AttentionQuery, User} from "@/Interface/ApiInterface";
import {useUserDetailsStore} from "@/store/UserDetailsStore"
import {useRouter} from "vue-router";
import {useLoadingBar, useMessage} from "naive-ui";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {addAttention, deleteAttention, getAttentionCondition} from "@/api/attention";
import {useAttentionStore} from "@/store/AttentonStore";
import {debounce} from "lodash";

const message = useMessage();
const loadingBar = useLoadingBar();
const router = useRouter()
const userDetailsStore = useUserDetailsStore();
const currentInstance = getCurrentInstance()
let users: User[] = []
let attentions: Attention[] = useAttentionStore().getAttentions();
let attentionsSet = new Set()
for (let attention of attentions) {
  attentionsSet.add(attention.attentionedUserId)
}

async function init() {
  await getRankingUser().then(res => {
    users = res.data.list
    currentInstance?.proxy?.$forceUpdate()
  })
}

//根据昵称跳转个人详情
async function doGetUser(nickname: string) {
  loadingBar.start()
  const userConditionRes = await getUserByCondition({nickname: nickname})
  if (userConditionRes.data.list !== null)
    userDetailsStore.setUser(userConditionRes.data.list[0])
  loadingBar.finish()
  await router.push({
    name: 'user',
    params: {
      name: nickname
    }
  })
}

const isAttention = ref(true)

//新增关注
async function doAddAttention(id: number) {
  loadingBar.start()
  const attention: Attention = {}
  await debounce(async () => {
    attention.attentionUserId = useWebInfoStore().getUser.id
    attention.attentionedUserId = id
    const res = await addAttention(attention);
    if (res.code === 200)
      message.success(res.message)
    else
      message.error(res.message)
    const axiosResponse = await getAttentionCondition({attentionUserId: useWebInfoStore().getUser.id});
    useAttentionStore().setAttentions(axiosResponse.data.list)
    attentions = useAttentionStore().getAttentions()
    attentionsSet.clear()
    for (let attention of attentions) {
      attentionsSet.add(attention.attentionedUserId)
    }
    loadingBar.finish()
    currentInstance?.proxy?.$forceUpdate()
  }, 500)()

}

//删除关注
async function doDeleteAttention(id: number) {
  loadingBar.start()
  const attentionQuery: AttentionQuery = {}
  await debounce(async () => {
    attentionQuery.attentionUserId = useWebInfoStore().getUser.id
    attentionQuery.attentionedUserId = id
    const res = await deleteAttention(attentionQuery);
    if (res.code === 200) {
      message.success(res.message)
    } else {
      message.error(res.message)
    }
    const axiosResponse = await getAttentionCondition({attentionUserId: useWebInfoStore().getUser.id});
    useAttentionStore().setAttentions(axiosResponse.data.list)
    attentions = useAttentionStore().getAttentions()
    attentionsSet.clear()
    for (let attention of attentions) {
      attentionsSet.add(attention.attentionedUserId)
    }
    loadingBar.finish()
    currentInstance?.proxy?.$forceUpdate()
  }, 500)()
}

onMounted(() => {
  init()
})
</script>

<style scoped lang="less">

/*排名的每个用户信息*/
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;

  a {
    display: flex;
    color: #646cff;
    align-items: center;
    justify-content: flex-start;
    max-width: 160px;
    font-size: 1.1em;
  }

  .item_attention {
    &:hover {
      cursor: pointer;
    }
  }
}


/*卡片头部头像部分*/
.header-detail {
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  /*头像部分的姓名和发布时间*/

  .header-detail-dd {
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    .user_name {
      &:hover {
        cursor: pointer;
      }
    }

    i {
      display: inline-block;
      max-width: 160px;
      overflow: hidden;
      height: 16px;
      color: #8590a6;
      line-height: 16px;
    }

  }
}


/*头部*/
.header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
}

/*导航卡片*/
.body {
  display: flex;
  background-color: white;
  width: 290px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 15px 10px;
  flex-direction: column;
}
</style>