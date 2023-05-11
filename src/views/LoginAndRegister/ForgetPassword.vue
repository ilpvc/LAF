<template>
  <div id="forget">
    <div class="content">
      <h2>找回密码</h2>
      <n-form
        ref="formRef"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging">
        <n-form-item label="邮箱">
          <n-input v-model:value="loginParams.email" placeholder="输入注册邮箱"/>
        </n-form-item>
        <n-form-item label="验证码">
          <n-input v-model:value="loginParams.code" placeholder="邮箱验证码"/><n-button type="info" @click="sendCode">发送验证码</n-button>
        </n-form-item>
        <n-form-item label="新密码" v-if="isVerification">
          <n-input v-model:value="loginParams.password" placeholder="输入新的密码"/>
        </n-form-item>
        <n-form-item label="重复密码" v-if="isVerification">
          <n-input v-model:value="newPassword" placeholder="再次输入密码"/>
        </n-form-item>
      </n-form>
      <div>
        <n-button type="info" @click="isEmail">{{ isVerification?'确认修改':'验证邮箱' }}</n-button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {LoginParams, UserSecurity} from "@/Interface/ApiInterface";
import {useMessage} from 'naive-ui'
import {getEmailCode, resetPassword, verificationMailbox} from "@/api/login";
import {useRouter} from "vue-router";

const message = useMessage()
const loginParams = ref<LoginParams>({
  email:'',
  code:'',
  password:''

})
const isVerification = ref(false)

//获取验证码
function sendCode(){
  console.log(loginParams.value)
  if (loginParams.value.email===''){
    message.error('请输入邮箱')
    return
  }
  getEmailCode({userEmail:loginParams.value.email})
  message.success('发送成功')
}

const newPassword = ref('')
const router = useRouter();
//验证邮箱和确认修改密码
async function isEmail(){
  if (isVerification.value){
    if (loginParams.value.password!==newPassword.value){
      message.error('两次密码不同')
    }else{
      let userSecurity:UserSecurity ={}
      userSecurity.email=loginParams.value.email||''
      userSecurity.password = loginParams.value.password
      const response1 = await resetPassword(userSecurity);
      if (response1.code===200){
        message.success('修改成功,等待跳转')
        await router.push({
          name:'login'
        })
      }else {
        message.error('此账号没有注册')
      }


    }
  }else {
    if (loginParams.value.email===''){
      message.error('请输入邮箱')
      return
    }else {
      const response = await verificationMailbox({userEmail:loginParams.value.email,code:loginParams.value.code});
      if (response.code===200){
        isVerification.value=true
        message.success('验证成功')
      }
    }
  }

}

</script>

<style scoped lang="less">
#forget {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 400px;
    height: 350px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 20px;
    }
  }
}
</style>