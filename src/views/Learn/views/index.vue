<template>
  <div id="learn-index">
    <div class="lists">
      <div class="list">
        <List>
          <template #title>
            今日榜单
          </template>
        </List>
      </div>
      <div class="list">
        <List style="border-right: 1px solid #e5e6eb;border-left: 1px solid #e5e6eb;">
          <template #title>
            本周榜单
          </template>
        </List>
      </div>
      <div class="list">
        <List>
          <template #title>
            本月榜单
          </template>
        </List>
      </div>
    </div>

    <div class="body">
      <div class="body-header">
        <h3>全部文章</h3>
      </div>

      <div class="body-essay">
        <EssayCard v-for="i in 5"></EssayCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import List from "../components/List.vue";
import EssayCard from "../components/EssayCard.vue";


</script>

<style scoped lang="less">
#learn-index {
  width: 580px;
  margin: 0 10px;

  .lists {
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    padding: 10px;
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin-top: 10px;
    background-color: white;

    .body-header {
      font-family: Avenir,serif;
      padding: 5px 10px;
      border-bottom: 1px #e5e6eb solid;
    }

    .body-essay {
      display: flex;
      flex-direction: column;

    }
  }

}
</style>