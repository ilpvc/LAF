<template>
  <div class="write_post">
    <div class="left">
      我是写帖子
    </div>
    <div>
      <NavigationCard></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>

  </div>
</template>

<script setup lang="ts">
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
</script>

<style scoped lang="less">
.write_post {
  display: flex;
  flex-direction: row;

  .left {
    width: 700px;
    height: 800px;
    background: white;
  }
}
</style>