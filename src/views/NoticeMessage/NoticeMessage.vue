<template>
  <div id="NoticeMessage">

    <div class="left">
      <div>
        <h2>所有消息</h2>
      </div>
      <n-scrollbar>
        <a href="#" v-for="i in 20" :key="i" class="l-item">
          <MessageThumbnail></MessageThumbnail>
        </a>
      </n-scrollbar>

    </div>

    <div class="right">

      <div class="r-top">
        <n-scrollbar style="max-height: 600px">
          <MessageItem v-for="i in 10" :key="i" :type ="i%2"></MessageItem>
        </n-scrollbar>
      </div>
      <div class="r-bottom">
        <!--        <emoji></emoji>-->
      </div>

    </div>

  </div>
</template>

<script setup>

import MessageThumbnail from "@/components/MessageThumbnail.vue";
import Emoji from "@/components/Emoji.vue";
import MessageItem from "@/components/MessageItem.vue";
</script>

<style scoped lang="less">

#NoticeMessage {
  display: flex;
  width: 1000px;
  padding: 10px;
  background-color: #c8e6c9;
  border-radius: 10px;

  .left {
    display: flex;
    flex-direction: column;
    width: 290px;
    border-right: 1px solid #121212;
    height: 800px;
    padding: 10px 2px;
    background: linear-gradient(135deg, #fbed96, #abecd6);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 700px;
    background: #e8f5e9;
    padding: 20px 10px;
    justify-content: space-between;

    .r-top {
      display: flex;
      flex-direction: column;
      height: 600px;
      border-bottom: 1px solid #8590a6;
    }
  }

}


.l-item {
  display: flex;

  transition: background 0.75s;

  &:hover {
    background: #e0ff9e;
  }
}
</style>