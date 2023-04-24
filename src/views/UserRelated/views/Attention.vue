<template>
  <div id="attention">
    <!--头部-->
    <div class="header">
      <span>关注用户</span> {{ 16 }}
    </div>
    <div class="body">
      <n-scrollbar style="max-height: 700px">
        <AttentionUser v-for="i in 100"></AttentionUser>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">

import AttentionUser from "../components/AttentionUser.vue";
</script>

<style scoped lang="less">

#attention {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 730px;
  height: 800px;
  background-color: white;
  padding: 15px;

  .header {
    padding: 4px 0;
    border-bottom: 1px solid #ececec;
    width: 700px;
    background-color: white;

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