<template>
  <div id="learn-user-info">

    <div class="announcement">
      <div class="announcement-header">公告</div>
      <div class="announcement-body">
        {{ webInfoStore.getUser.otherContacts }}
      </div>
    </div>

    <div class="title">
      <div class="title-header">
        {{ webInfoStore.getUser.nickname }}
      </div>
      <div class="title-search">
        <input type="search" placeholder="搜索" v-model="searchContent" @keyup.enter="doSearch"/>
      </div>
    </div>


    <div class="info">
      <div class="info-header">
        <n-avatar
          round
          :size="50"
          :src="webInfoStore.getUser.header"
        />
      </div>

      <div class="info-body">
        <i class="info-body-item"><i>{{ postStore.getMyLearnPostsNum() }}</i><i>文章</i></i>
        <i class="info-body-item info-body-item-center"><i>{{ 80 }}</i><i>创作金</i></i>
        <i class="info-body-item"><i>{{ postStore.getMyLikesNum() }}</i><i>点赞</i></i>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {NAvatar} from 'naive-ui'
import {useWebInfoStore} from "@/store/WebInfoStore";
import {usePostStore} from "@/store/PostStore";
import {ref} from "vue";
import {getPostByCondition, pagePostCondition} from "@/api/posts";

const webInfoStore = useWebInfoStore();
const postStore = usePostStore();
const emits = defineEmits(['search']);
const searchContent = ref('')

async function doSearch(){

  const postsRes = await pagePostCondition({searchInfo:searchContent.value,types:[4]},1,5);
  console.log(postsRes)
  emits("search",postsRes.data.items.records,postsRes.data.items.pages,searchContent.value)
}

</script>

<style scoped lang="less">

//整个主体
#learn-user-info {
  @global-color: #e05a4e;
  width: 250px;

  //公告
  .announcement {

    border-radius: 10px;
    background-color: @global-color;
    margin-bottom: 5px;
    height: 90px;

    .announcement-header {
      font-family: "Calibri Light", serif;
      font-size: 20px;
      text-align: center;
      justify-content: center;
      color: white;
      border-bottom: 1px red;
      margin-bottom: 10px;
    }

    .announcement-body {
      text-align: center;
      justify-content: center;
      color: white;
    }
  }


  //标题
  .title {
    border-radius: 10px;
    margin-bottom: 10px;

    .title-header {
      font-family: "Calibri Light", serif;
      font-size: 20px;
      text-align: center;
      justify-content: center;
      color: white;
      border-bottom: 1px red;
      background-color: @global-color;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 5px 0;
    }

    .title-search {
      background-color: white;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        outline: none;
        border: none;
        border-radius: 5px;
        height: 35px;
        width: 180px;
        background-color: #f6f6f6;
        text-align: center;
      }
    }

  }


  //用户信息
  .info {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;

    .info-header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 100px;

    }

    .info-body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .info-body-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
        user-select: none;
        transition: color 0.3s;
        i {
          font-family:system-ui;
        }
        &:hover {
          cursor: pointer;
          color: @global-color;
        }
      }

      .info-body-item-center {
        border-left: 1px #bbbbbb solid;
        border-right: 1px #bbbbbb solid;
      }
    }
  }

}


</style>