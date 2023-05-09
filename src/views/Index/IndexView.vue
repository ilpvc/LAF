<template>
  <div class="index">
    <div>
      <!--      <n-empty size="large" description="什么也没有" v-if="postNum===0" class="empty">-->
      <!--      </n-empty>-->
      <Card v-for="port in ports" :key="port.id" v-bind:pp="port"></Card>
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
import {getAllNormalPost, getPostByCondition} from "@/api/posts";
import {getCurrentInstance, nextTick, onMounted, ref, watch} from "vue";
import {useWebStore} from "@/store/WebStore";
import {Type} from "@/Interface/enum";
import {useHttpStatusStore} from "@/store/HttpStatusStore";
import {useRouter} from "vue-router";
import {useLoadingBar, useMessage} from "naive-ui"
import {addTaskUsers, getTaskUserByCondition} from "@/api/taskUser";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {getUserSettingsById} from "@/api/userSetting";
import {useUserSettingStore} from "@/store/UserSettingStore";

const loadingBar = useLoadingBar()
const router = useRouter()
const currentInstance = getCurrentInstance()
let ports = ref([])
const postNum = ref(ports.value.length)
let load = false
const webStore = useWebStore()

async function init() {
  loadingBar.start()
  //获取后端数据，将数据赋值，并且重新加载页面
  if (webStore.getPage === Type.ALL) {
    await getAllNormalPost().then(res => {
      ports.value = res.data.list
      postNum.value = ports.value.length
      if (useHttpStatusStore().getErrorStatus().has(res.status)) {
        confirm("你还没有登录，请登录")
        router.push({name: 'login'})
      }
    })
  } else {
    const res = await getPostByCondition({types: [webStore.getPage], status: [1]});
    ports.value = res.data.list
    if (useHttpStatusStore().getErrorStatus().has(res.status)) {
      confirm("你还没有登录，请登录")
      await router.push({name: 'login'})
    }
  }
  loadingBar.finish()
  load = true
  currentInstance?.proxy?.$forceUpdate()

}


const webInfoStore = useWebInfoStore();
const message = useMessage();

//完成登录任务
async function doLoginTask() {
  const taskUserRes = await getTaskUserByCondition({taskId: 7, userId: webInfoStore.getUser.id});
  if (taskUserRes.data.list.length === 0) {
    await addTaskUsers({taskId: 7, userId: webInfoStore.getUser.id})
    message.success('每日登录 完成')
  }

}

watch(() => webStore.getPage, () => {
  init()
})

nextTick(() => {

})

const userSettingStore = useUserSettingStore();
onMounted(async () => {
  await init()
  await doLoginTask()
  const userSettingsByIdRes =await getUserSettingsById(webInfoStore.getUser.id);
  userSettingStore.setLoginUserSetting(userSettingsByIdRes.data.item)
})


</script>

<style scoped lang="less">

.index {
  display: flex;
  flex-direction: row;
}


</style>