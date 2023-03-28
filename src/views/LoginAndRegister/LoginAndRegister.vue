<template>
  <div id="LAR-body">
    <div class="main">
      <n-card>
        <n-tabs
            class="card-tabs"
            default-value="signin"
            size="large"
            animated
            style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="signin" tab="登录">
            <n-form>
              <n-form-item-row label="用户名">
                <n-input placeholder="用户名" v-model:value="user.name" type="text"/>
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input placeholder="6-16位密码" v-model:value="user.password" type="password"/>
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="inspectionRule">
              登录
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <n-form>
              <n-form-item-row label="用户名">
                <n-input placeholder="用户名" v-model:value="user.name" type="text"/>
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input placeholder="6-16位密码" v-model:value="user.password" type="password"/>
              </n-form-item-row>
              <n-form-item-row label="重复密码">
                <n-input placeholder="重复密码" v-model:value="user.ensurePwd" type="password"/>
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong>
              注册
            </n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {useMessage} from "naive-ui";

const message = useMessage()
const router = useRouter()
let user = reactive({
  name: "",
  password: "",
  ensurePwd: "",
})

function inspectionRule() {

  if (user.password !== "" && '' !== user.name) {
    router.push('/home')
  } else {
    message.error('账号密码错误！')
  }
}

</script>

<style scoped lang="less">

#LAR-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url("@/views/LoginAndRegister/login-bg.jpg") no-repeat center center;
  background-size: 100% 100%;

  .main {
    width: 600px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>