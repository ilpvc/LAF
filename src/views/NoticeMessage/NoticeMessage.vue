<template>
  <div id="NoticeMessage">

    <div class="left">
      <div>
        <h2>所有消息</h2>
      </div>
      <n-scrollbar>
        <a href="#" v-for="i in 20" :key="i" class="l-item">
          <Message></Message>
        </a>
      </n-scrollbar>


    </div>

    <div class="right">

    </div>

  </div>
</template>

<script setup>

import Message from "@/components/Message.vue";
</script>

<style scoped lang="less">

#NoticeMessage {
  display: flex;
  width: 1000px;
  padding: 10px;
  background-color: white;
  .left {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 290px;
    border-right: 1px solid #121212;
    height: 800px;
    padding: 10px 0;



  }

  .right {
    display: flex;
    flex-direction: column;
    width: 700px;
    background-color: white;
    padding: 20px 10px;
  }

}


.l-item {
  display: flex;
  //background-color: #cccccc;
  &:hover {
    background-color: #cccccc;
  }
}
</style>