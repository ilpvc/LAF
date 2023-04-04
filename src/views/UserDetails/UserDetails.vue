<template>
  <div class="body">

    <div class="header">
      <!--      <div style="margin: 40px">-->

      <!--      </div>-->
      <div class="header-info">
        <img src="./img/bg.jpg">
      </div>

      <div class="header-user">
        <div>
          <i style="font-size: 1.5em">个人信息</i>&nbsp;<a href="#">修改</a>
        </div>
        <div class="info" style="position: relative;left: -12px">
          <i>姓名:</i> {{ userInfo.realName || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -24px">
          <i>性别:</i> {{ userInfo.gender || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -36px">
          <i>年龄:</i> {{ userInfo.age || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -48px">
          <i>班级:</i> {{ userInfo.clazz || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -60px">
          <i>QQ:</i> {{ userInfo.QQ || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -72px">
          <i>邮箱:</i> {{ userInfo.email || '未设置' }}
        </div>

      </div>

      <div class="header-avatar">
        <div class="avatar" style="position: relative;left: -12px">
          <n-avatar
              :size="100"
              :src="userInfo.header"
          />
        </div>
        <div class="btn" style="position: relative;left: -42px">
          <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
      'naive-info': 'hello!'
    }"
              :data="{
      'naive-data': 'cool! naive!'
    }"
          >
            <n-button>上传头像</n-button>
          </n-upload>
        </div>
        <div class="btn" style="position: relative;left: -60px">
          <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
      'naive-info': 'hello!'
    }"
              :data="{
      'naive-data': 'cool! naive!'
    }"
          >
            <n-button>修改背景</n-button>
          </n-upload>
        </div>
      </div>

      <div class="header-setting">
        <div style="font-size: 1.5em;position:relative; left: 10px;margin-bottom: 10px;color: white">选项</div>
        <div style="position: relative;left: 31px;border-bottom: #ffffff 1px solid;width: 136px;">
          <i style="margin-left: 10px">
            <a href="#" style="font-size: 1.1em;color: white;">隐藏个人信息</a>
          </i>
        </div>
      </div>

    </div>

    <div class="center">

      <div class="left">
        <div class="left-header">
          <n-tabs default-value="praise" justify-content="space-around">
            <n-tab-pane name="praise" tab="我点赞的" class="left-content">
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane name="comment" tab="我评论的" class="left-content">
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane name="collection" tab="收藏" class="left-content">
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane name="attention" tab="关注" class="left-content">
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port" ></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane name="report" tab="举报" class="left-content">
              七里香
            </n-tab-pane>
          </n-tabs>
        </div>
      </div>

      <div class="right">
        <NavigationCard></NavigationCard>
        <MissionCard></MissionCard>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import Card from "@/components/Card/Card.vue"
import {reactive, ref} from "vue";
import NavigationCard from "@/components/NavigationCard.vue";
import MissionCard from "@/components/MissionCard.vue";
import {Post, User} from "@/Interface/ApiInterface";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {usePostStore} from "@/store/PostStore";

const postStore = usePostStore()
const webInfoStore = useWebInfoStore()
let userInfo = reactive<User>({
  ...webInfoStore.getUser
})

const posts = postStore.getPosts

</script>

<style scoped lang="less">

//主题右部分
.right {
  display: flex;
  width: 300px;
  flex-direction: column;
}

//主体左部分
.left {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 700px;
  //margin-right: 10px;
  .left-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-content {
      padding: 20px 0px;
    }
  }
}

//主题部分
.center {
  display: flex;
  flex-direction: row;
}

//设置
.header-setting {
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  background: linear-gradient(110deg, transparent 90px, #646cff 0);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  a:hover {
    color: #ececec;
  }
}

//头像信息
.header-avatar {
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: flex-start;
  align-items: center;

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
  }

  .btn {
    margin: 5px 10px;
  }
}

//个人信息
.header-user {
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: space-around;

  .info {
    display: inline-block;
    overflow: hidden;
    width: 190px;
    color: red;

    i {
      color: #121212;
    }
  }
}

/*背景信息*/
.header-info {
  width: 500px;
  height: 250px;

  background: linear-gradient(-70deg, transparent 100px, #ffffff 0) bottom right;
  /*box-shadow: 0 0 50px 10px #ececec;*/
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    -webkit-mask-image: linear-gradient(-70deg, transparent 100px, #646cff 0);
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    opacity: 90%;
    fill-opacity: 11110;
    transition: opacity 0.5s;
  }

  img:hover {
    opacity: 100%;
  }
}

/*个人主页*/
.body {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  width: 1000px;
}

/*个人主页的头*/
.header {
  display: flex;
  flex-direction: row;
  height: 250px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(110deg, transparent 450px, #ffffff 0) top left #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 20px 2px #8590a6;
}

</style>