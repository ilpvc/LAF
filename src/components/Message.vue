<template>
  <div id="Message">
    <div class="card-header">
      <div class="header-detail">
        <n-avatar
            round
            size="large"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <div class="header-detail-dd">
          <h4>昵称</h4>
          <p>{{reverseInformation}}</p>
        </div>
      </div>
      <div>

      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

let reverseInformation = ref("")
reverseInformation.value = "😆笑死了"

</script>

<style scoped lang="less">

#Message {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #8590a6;
  width: 290px;
  /*卡片头部*/
  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /*卡片头部头像部分*/

    .header-detail {
      display: flex;
      flex-direction: row;

      /*头像部分的姓名和发布时间*/
      .header-detail-dd {
        display: flex;
        flex-direction: column;
        padding-left: 10px;

      }

      .header-detail-dd p {
        display: block;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #8590a6;
      }
    }

  }
}
</style>