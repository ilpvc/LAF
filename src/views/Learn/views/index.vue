<template>
  <div id="learn-index">
    <div class="lists">
      <div class="list">
        <List></List>
      </div>
      <div class="list">
        榜单二
      </div>
      <div class="list">
        榜单三
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import List from "../components/List.vue";


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

  }

}
</style>