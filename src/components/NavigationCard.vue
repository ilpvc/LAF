<template>

  <div id="nav-body">

    <div class="header">
      <svg width="18" height="20" viewBox="0 0 24 24" class="Zi Zi--Creator CreatorEntrance-creatorIcon"
           fill="currentColor" color="#444444">
        <path fill-rule="evenodd"
              d="M6.5 7.5A5.5 5.5 0 0 1 12 2a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 0 1 12 13a5.5 5.5 0 0 1-5.5-5.5Zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 0 0-.545-.509 1.37 1.37 0 0 0-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 0 0 .955-.929c.06-1.767.7-2.96 1.456-3.723Zm6.504-1.568a.75.75 0 1 0-1.228-.86l-2.903 4.146a.75.75 0 0 0 1.229.86l2.902-4.146Zm-4.227 6.099a.75.75 0 1 0-1.241-.842l-.267.392a.75.75 0 0 0 1.242.842l.266-.392Z"
              clip-rule="evenodd"></path>
      </svg>
      <i style="color: #444444;padding-left: 5px">
        我的需求
      </i>
    </div>

    <div class="info">
      <ul>
        <li>
          <router-link :to="{name:'write'}">
          <img src="src/components/img/lost.svg" alt="寻物">
          发起寻物
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'write'}">
          <img src="src/components/img/found.svg" alt="招领">
          发起招领
          </router-link>
        </li>
        <li><router-link :to="{name:'feedback'}">
          <img src="src/components/img/feedback.svg" alt="反馈">
          我要反馈</router-link></li>
      </ul>
    </div>

    <div class="data">
      <div style="display: flex;flex-direction: column;align-items: center">
        <i>今日找回数量</i>
        <n-statistic :value="now.numberValue">
        </n-statistic>

      </div>
      <div style="display: flex;flex-direction: column;align-items: center">
        <i>累计找回数量</i>
        <n-statistic :value="all.numberValue">
        </n-statistic>
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">

import {AttributeQuery} from "@/Interface/ApiInterface";
import {getCurrentInstance, nextTick, onMounted} from "vue";
import {getLikeKey} from "@/api/attribute";

const currentInstance = getCurrentInstance()

let count: AttributeQuery[] = []
//初始化对象
let now: AttributeQuery = {}
let all: AttributeQuery = {}


async function init() {
  await getLikeKey("complete").then(res => {
    count = res.data.list
    now = count[1]
    all = count[0]
    currentInstance?.proxy?.$forceUpdate()
  })

}

nextTick(() => {

})


onMounted(() => {
  init()
})
</script>

<style scoped lang="less">


.data {
  display: flex;
  height: 100px;
  background-color: #f9f9fa;
  border-radius: 10px;
  justify-content: space-around;
  padding: 15px 5px;
}

/*中间部分*/
.info {
  margin: 20px 0px;
}

.info a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #121212;
  transition: color 1s;
  height: 80px;
  width: 80px;
  border-radius: 10px;
  justify-content: space-around;
}

.info a:hover {
  color: #646cff;
  background-color: #f9f9fa;
}

.info ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

/*头部*/
.header {
  display: flex;
  align-items: center;
}

/*导航卡片*/
#nav-body {
  display: flex;
  background-color: white;
  width: 290px;
  margin-left: 10px;
  padding: 15px 10px;
  flex-direction: column;
  margin-bottom: 10px;
}


</style>