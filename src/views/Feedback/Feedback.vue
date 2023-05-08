<template>
  <div id="feedback">
    <div class="left">
      <h2>
        反馈问题
      </h2>
      <div class="detail">
        <n-text type="info">问题描述:</n-text>
        <n-input
          class="detail-input"
          v-model:value="content1"
          type="textarea"
          placeholder="描述遇到的问题,管理员会在5个工作日内处理该问题"
        />
        <n-button type="info" @click="doSubmitFeedback(1)">发送</n-button>
        <n-divider title-placement="left">其他问题</n-divider>
        <n-text type="warning">系统使用过程中出现的的问题反馈</n-text>
        <n-input
          class="detail-input"
          v-model:value="content2"
          type="textarea"
          placeholder="描述在系统使用过程中遇到的问题,例如不显示,数据更新不及时,系统卡顿等,工作人员会在30个工作日内处理该问题"
        />
        <n-button type="info" @click="doSubmitFeedback(2)">发送</n-button>
      </div>
    </div>

    <div>
      <NavigationCard></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>
  </div>
</template>

<script setup lang="ts">

import LeiFengRank from "@/components/LeiFengRank.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import {ref} from "vue";
import {useDialog,useMessage} from 'naive-ui'
import {addMessage} from "@/api/message";
import {useWebInfoStore} from "@/store/WebInfoStore";

const dialog = useDialog();
const content1 = ref('')
const content2 = ref('')

const message = useMessage();
function doSubmitFeedback(type: number) {
  dialog.info({
    title: '请确认',
    content: `反馈内容: ${type===1?content1.value:content2.value}`,
    positiveText:'确认',
    negativeText:'取消',
    onPositiveClick: async () => {
      await addMessage({userId: useWebInfoStore().getUser.id, content: `${type === 1 ? content1.value : content2.value}`, type: 3})
      type === 1 ? content1.value='' : content2.value=''
      message.success('反馈成功')
    },
    autoFocus: false
})

}


</script>

<style lang="less">


#feedback {
  display: flex;
  flex-direction: row;

  .left {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 700px;
    height: 800px;
    background: white;
    align-items: center;

    .detail {
      width: 100%;

      .detail-input {
        margin: 5px 0;
      }
    }
  }
}
</style>