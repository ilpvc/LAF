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
          <i style="font-size: 1.5em">个人信息</i>
        </div>
        <div>
          姓名: {{ userInfo.name }}
        </div>
        <div>
          性别: {{ userInfo.sex }}
        </div>
        <div>
          年龄: {{ userInfo.age }}
        </div>
        <div>
          班级: {{ userInfo.class }}
        </div>
        <div>
          QQ: {{ userInfo.QQ }}
        </div>
        <div>
          邮箱: {{ userInfo.email }}
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

//个人信息
.header-user {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}

/*头像信息*/
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
    opacity: 80%;
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
  align-items: center;
  background: linear-gradient(110deg, transparent 450px, #646cff 0) top left #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 20px 2px #8590a6;
}

</style>