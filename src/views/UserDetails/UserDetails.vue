<template>
  <div class="body">

    <div class="header">
      <!--      <div style="margin: 40px">-->

      <!--      </div>-->
      <div class="header-info">
        <img src="./bg.jpg">
      </div>

      <div class="header-user">
        <div>
          <i style="font-size: 1.5em">个人信息</i>&nbsp;<a href="#">修改</a>
        </div>
        <div style="position: relative;left: -12px">
          姓名: {{ userInfo.name }}
        </div>
        <div style="position: relative;left: -24px">
          性别: {{ userInfo.sex }}
        </div>
        <div style="position: relative;left: -36px">
          年龄: {{ userInfo.age }}
        </div>
        <div style="position: relative;left: -48px">
          班级: {{ userInfo.class }}
        </div>
        <div style="position: relative;left: -60px">
          QQ: {{ userInfo.QQ }}
        </div>
        <div style="position: relative;left: -72px">
          邮箱: {{ userInfo.email }}
        </div>

      </div>

      <div class="header-avatar">
        <div class="avatar" style="position: relative;left: -12px">
          <n-avatar
              :size="100"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <!--          <i style="font-size: 1.3em;font-style: italic;position: relative;left: -12px  ">ilpvc</i>-->
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
        <div style="font-size: 1.5em;position:relative; left: 24px;margin-bottom: 10px">选项</div>
        <div style="position: relative;left: 32px;border-bottom: #444444 1px solid;width: 135px;">
          <i style="margin-left: 10px">
            <a href="#" style="font-size: 1.1em;color: #121212;">隐藏信息</a>
          </i>
        </div>
      </div>

    </div>

    <div class="center">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>


import {reactive, ref} from "vue";

let userInfo = reactive({
  name: "ilpvc",
  sex: '男',
  age: '22',
  class: '19软件2班',
  QQ: '2693285351',
  email: "2693285351@qq.com"
})
</script>

<style scoped lang="less">

//设置
.header-setting {
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  background: linear-gradient(110deg, transparent 90px, #646cff 0);
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