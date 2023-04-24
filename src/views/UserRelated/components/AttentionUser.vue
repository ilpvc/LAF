<template>
  <div id="attention-user">
    <div class="header">
      <div class="header-image">
        <n-avatar
          round
          :size="45"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </div>

      <div class="body">
        {{'ilpvc'}}
      </div>
    </div>


    <div class="footer">
      <n-button v-if="isAttention" class="button-width button" @click="doAttention">
        已关注
      </n-button>
      <n-button v-if="!isAttention" class="button-width" @click="doAttention">
        关注
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMessage} from 'naive-ui'
import {ref, unref} from "vue";

const message = useMessage();

//关注功能
const isAttention = ref(true)
function doAttention(){
  isAttention.value=!unref(isAttention)
  if (unref(isAttention))
  message.success('关注成功')
  else
    message.success('取消关注')
}


</script>

<style scoped lang="less">

#attention-user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  border-bottom: 1px solid #ececec;
  .header{
    display: flex;
    align-items: center;
    .header-image{

    }

    .body {
      font-size: 20px;
      font-family: "微软雅黑",serif;
      margin-left: 20px;
    }
  }
  .footer {
    .button {
      background-color: #8cc855;

    }

    .button-width{
      width: 80px;
      outline: none;
    }
  }
}
</style>