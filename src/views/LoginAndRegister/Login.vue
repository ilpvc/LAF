<template>
  <div id="login-body">
    <!-- login/register container -->
    <div :class="container">
      <!-- register -->
      <div class="form-container sign-up-container">
        <div class="form">
          <h2>注 册</h2>
          <input type="text" name="username" id="username" placeholder="用户名..." v-model="userDetails.nickname">
          <input type="email" name="email" placeholder="邮箱..." v-model="userDetails.email">
          <input type="password" name="password" placeholder="密码..." v-model="userDetails.password">
          <div>
            <input class="send" type="text" name="captcha" placeholder="验证码..." v-model="userDetails.emailCode">
            <n-button size="large" type="info">发送</n-button>
          </div>

          <button class="signUp" @click="doSignUp">注 册</button>
        </div>
      </div>
      <!-- login -->
      <div class="form-container sign-in-container">
        <div class="form">
          <h2>登 录</h2>
          <input type="email" name="username" id="email" placeholder="用户名..."
                 v-model="userDetails.nickName">
          <input type="email" name="email" placeholder="邮箱..." v-model="userDetails.email">

          <input type="password" name="password" id="password" placeholder="密码..."
                 v-model="userDetails.password">
          <a href="#" class="forget-password">忘记密码</a>
          <button class="signIn" @click="doSignIn">登 录</button>
        </div>
      </div>
      <!-- overlay container -->
      <div class="overlay_container">
        <div class="overlay">
          <!-- overlay left -->
          <div class="overlay_panel overlay_left_container">
            <h2>欢迎回来</h2>
            <p>我已经有账号了</p>
            <button id="sign-in" @click="signIn">登 录</button>
          </div>
          <!-- overlay right -->
          <div class="overlay_panel overlay_right_container">
            <h2>欢迎回来</h2>
            <p>感谢你使用本公司的OA系统</p>
            <button id="sign-up" @click="signUp">注 册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {register} from "@/api/register.js";
import {LoginParams, UserQuery} from "@/Interface/ApiInterface";
import {useMessage} from "naive-ui"
import {login} from "@/api/login";
import {useRouter} from "vue-router";
// import {useRouter} from "vue-router";

// import {setToken} from "@/utils/auth";
//
// const store = useStore()
const router = useRouter()
let container = reactive(['container', 'active'])
const message = useMessage()

//
function signIn() {
  container.pop()
}

function signUp() {
  container.push('active')
}

//
let userDetails: LoginParams = reactive({})

//注册
function doSignUp() {

  console.log(userDetails)
  if (userDetails.nickName === undefined) {
    message.error("请输入用户名")
  } else if (userDetails.email === undefined) {
    message.error('请输入邮箱')
  } else if (userDetails.password === undefined) {
    message.error('请输入密码')
  } else if (userDetails.emailCode === undefined) {
    message.error('验证码错误')
  } else {
    register(userDetails).then(res => {
      console.log(res.data)

    })
  }

}
//登录
function doSignIn() {
  if (userDetails.nickName === undefined) {
    message.error("请输入用户名")
  } else if (userDetails.password === undefined) {
    message.error('请输入密码')
  } else {
    login(userDetails).then(res => {
      if (res.data.token!==null){
        router.push({name:'index'})
      }
    })
  }
}

</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f6f5f7;
}

h2 {
  margin-bottom: 10px;
  font-size: 32px;
  text-transform: capitalize;
}

.container {
  position: relative;
  width: 768px;
  height: 480px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.form-container {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  transition: all 0.6s ease-in-out;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 50px;

  div {
    display: flex;

    .send {
      margin: 8px 0;
      padding: 12px;
      background-color: #eee;
      border: none;
    }

    button {
      border-radius: 0;
      margin: 10px 0 10px 10px;
    }
  }

}

input {
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  background-color: #eee;
  border: none;
  caret-color: black;
  color: #121212;
}

.forget-password {
  display: inline-block;
  height: 20px;
  text-decoration: none;
  color: #bbb;
  text-transform: capitalize;
  font-size: 12px;
}

.forget-password:hover {
  color: lightslategray;
  border-bottom: 2px solid #1e90ff;
}

button {
  background: #1e90ff;
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 20px;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
  outline: none;
  transition: transform 80ms;
}

button:active {
  transform: scale(0.95);
}

.overlay_container {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 100;
  right: 0;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
}

.overlay {
  position: absolute;
  width: 200%;
  height: 100%;
  left: -100%;
  background-color: #1e90ff;
}

.overlay_panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: white;
  padding: 0 40px;
  text-align: center;
}

.overlay_panel button {
  background-color: transparent;
  border: 1px solid white;
}

.overlay_panel p {
  font-size: 12px;
  margin: 10px 0 15px 0;
}

.overlay_right_container {
  right: 0;
}

.container.active .sign-up-container {
  transform: translateX(100%);
  z-index: 5;
}

.container.active .sign-in-container {
  transform: translateX(100%);
}

.container.active .overlay_container {
  transform: translateX(-100%);
}

.container.active .overlay {
  transform: translateX(50%);
}
</style>