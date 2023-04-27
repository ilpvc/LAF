<template>
  <div class="learn_body">

    <div class="nav">

      <ul ref="allItem">
        <li class="nav-item" :class="{onFocus:isActive[0]}" @click="changeNav(0)">全部学科</li>
        <li class="nav-item" :class="{onFocus:isActive[1]}" @click="changeNav(1)">高等数学</li>
        <li class="nav-item" :class="{onFocus:isActive[2]}" @click="changeNav(2)">大学英语</li>
        <li class="nav-item" :class="{onFocus:isActive[3]}" @click="changeNav(3)">教资</li>
        <li class="nav-item" :class="{onFocus:isActive[4]}" @click="changeNav(4)">四六级</li>
        <li class="nav-item" :class="{onFocus:isActive[5]}" @click="changeNav(5)">C语言</li>
        <li class="nav-item" :class="{onFocus:isActive[6]}" @click="changeNav(6)">其他</li>
      </ul>
    </div>

    <div class="center">
      <index></index>
    </div>

    <div class="right">
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, unref} from "vue";
import UserInfo from "./components/UserInfo.vue";
import Index from "./views/index.vue";

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

function changeNav(nav: number) {
  isActive.value = [false, false, false, false, false, false,false]
  for (let i = 0; i < unref(isActive).length; i++) {
    if (i === nav) {
      unref(isActive).splice(i,1,true)
    }
  }


}


onMounted(() => {
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