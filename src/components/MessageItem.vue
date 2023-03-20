<template>
  <div id="MessageItem-body" ref="MessageItem" v-if="type===1">
    <n-avatar
        round
        size="large"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <div class="message">
      {{ message }}
    </div>
  </div>
  <div id="MessageItem-body-2" ref="MessageItem" v-else="type===2">
    <div class="message">
      {{ message }}
    </div>
    <n-avatar
        round
        size="large"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />

  </div>
</template>

<script setup>


import {ref} from "vue";

let message = ref("zhekshalshdjkalshdjasdhakshdj就阿什顿克拉斯电脑就卡死打三等奖哈里斯大量计算德哈卡江" +
    "苏大空间的内裤阿卡死了近打开四大皆空塑料袋拉克丝辣斗辣角色的拉克丝低年级达拉斯肯德基as就看到has了解到哈三季度蓝色经典哪里看。")


const ss= defineProps({
  type:Number
})

</script>

<style scoped lang="less">

#MessageItem-body {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 670px;
  margin: 10px 0;

  .message {
    max-width: 500px;
    background-color: white;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 0 15px;
  }
}

#MessageItem-body-2 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 670px;
  justify-content: flex-end;
  margin: 10px 0;
  .message {
    max-width: 500px;
    background-color: white;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 0 15px;
  }
}


</style>