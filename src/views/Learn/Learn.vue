<template>
  <div class="learn_body">
    <div class="nav">

      <ul ref="allItem">
        <li ref="defaultItem" tabindex="-1" class="nav-item">全部学科</li>
        <li tabindex="1" class="nav-item">高等数学</li>
        <li tabindex="2" class="nav-item">大学英语</li>
        <li tabindex="3" class="nav-item">教资</li>
        <li tabindex="4" class="nav-item">四六级</li>
        <li tabindex="5" class="nav-item">C语言</li>
        <li tabindex="6" class="nav-item">其他</li>
      </ul>
    </div>

    <div class="center">
      <router-view></router-view>
    </div>

    <div class="right">

    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
const defaultItem = ref()
const allItem = ref()

onMounted(()=>{
  defaultItem.value.focus()

  console.log(allItem.value)
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

    .nav-item {
      font-size: 16px;
      padding: 15px 20px;
      font-weight: 500;
      &:hover {
        user-select: none;
        background-color: #f9f9fa;
        cursor: pointer;
        color: #646cff;
      }
      &:focus {
        background-color: #eaf2ff;
        color: #646cff;
      }
    }
  }
}
</style>