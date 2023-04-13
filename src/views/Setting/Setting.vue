<template>
  <div id="Setting-body">

    <div>
      <n-modal
          v-model:show="showModal"
          preset="dialog"
          title="确认"
          content="你确认?"
          positive-text="确认"
          negative-text="取消"
          @positive-click="submitCallback"
          @negative-click="cancelCallback"
          :closable="false"
      >
        <n-form ref="formRef">
          <n-form-item path="nickname" label="用户名" v-if="showType===1">
            <n-input v-model:value="user.nickname" placeholder="请输入用户名"/>
          </n-form-item>
          <n-form-item path="password" label="原密码" v-if="showType===2">
            <n-input
                v-model:value="user.originPassword"
                type="password"
                placeholder="原密码"
            />
          </n-form-item>
          <n-form-item path="password" label="新密码" v-if="showType===2">
            <n-input
                v-model:value="user.password"
                type="password"
                placeholder="新密码"
            />
          </n-form-item>
          <n-form-item
              ref="rPasswordFormItemRef"
              first
              path="reenteredPassword"
              label="重复密码"
              v-if="showType===2"
          >
            <n-input
                v-model:value="user.rePassword"
                :disabled="!user.password"
                type="password"
                placeholder="重复密码"
            />
          </n-form-item>
          <n-form-item path="email" label="邮箱" v-if="showType===3">
            <n-input v-model:value="user.email" placeholder="请输入邮箱"/>
          </n-form-item>
        </n-form>
      </n-modal>

    </div>
    <div class="left">

      <div class="item">

        <h2>账号与密码设置</h2>

        <div class="item-i">
          <h3>账&nbsp;&nbsp;&nbsp;&nbsp;号</h3>
          <div>
            <i>ilpvc</i>

            <i @click="change(1)" class="modify">修改</i>
          </div>
        </div>

        <div class="item-i">
          <h3>密&nbsp;&nbsp;&nbsp;&nbsp;码</h3>
          <div>
            <i>**********</i>
            <i @click="change(2)" class="modify">修改</i>
          </div>
        </div>


        <div class="item-i">
          <h3>邮箱</h3>
          <div>
            <i>2693285351@qq.com</i>
            <i @click="change(3)" class="modify">修改</i>
          </div>

        </div>
        <div class="item-i">
          <h3>账号注销</h3>
          <div>
            <i style="color: red;">此操作将彻底删除此账号，请谨慎操作</i>
            <a href="#" style="color:red;">注销</a>
          </div>

        </div>

      </div>

      <div class="item">
        <h2>消息与用户</h2>

        <div class="item-i">
          <h3>黑名单</h3>
          <div>
            <i>ilpvc,colzry</i>
            <i>修改</i>
          </div>
        </div>

        <div class="item-i">
          <h3>系统消息</h3>
          <div>
            <i>系统消息推送</i>
            <n-switch>
              <template #checked>
                接收
              </template>
              <template #unchecked>
                不接受
              </template>
            </n-switch>
          </div>
        </div>

        <div class="item-i">
          <h3>关注消息</h3>
          <div style="padding: 10px 0px;margin-left: 10px;">
            <i>别人关注我</i>
            <n-switch>
              <template #checked>
                接收
              </template>
              <template #unchecked>
                不接受
              </template>
            </n-switch>
          </div>

          <div style="padding: 10px 0px;margin-left: 10px;">
            <i>举报消息</i>
            <n-switch>
              <template #checked>
                接收
              </template>
              <template #unchecked>
                不接受
              </template>
            </n-switch>
          </div>

          <div style="padding: 10px 0px;margin-left: 10px;">
            <i>我关注别人</i>
            <n-switch>
              <template #checked>
                发送
              </template>
              <template #unchecked>
                不发送
              </template>
            </n-switch>
          </div>


        </div>


        <div class="item-i">
          <h3>帖子消息</h3>
          <div style="padding: 10px 0px;margin-left: 10px;">
            <i>收到回复时</i>
            <n-switch>
              <template #checked>
                接收
              </template>
              <template #unchecked>
                不接收
              </template>
            </n-switch>
          </div>

          <div style="padding: 10px 0px;margin-left: 10px;">
            <i>帖子被收藏时</i>
            <n-switch>
              <template #checked>
                接收
              </template>
              <template #unchecked>
                不接收
              </template>
            </n-switch>
          </div>
        </div>


      </div>

      <div class="item">
        <h2>反馈</h2>

        <div>
          <h3>提交问题</h3>
          <div style="height: 300px;display: block">
            <MyEditor></MyEditor>
          </div>
        </div>

      </div>

    </div>

    <div class="right">
      <div class="question">
        <h2>常见问题</h2>
        <ul>
          <li><a href="#">1、忘记密码怎么办？</a></li>
          <li><a href="#">2、账号注销可以找回吗？</a></li>
          <li><a href="#">3、绑定手机号无法使用,应该怎么解绑?</a></li>
          <li><a href="#">4、账号封禁，如何解封？</a></li>
          <li><a href="#">5、帖子信息侵犯个人信息？如何解决</a></li>
          <li><a href="#">6、别人对我言语攻击，应该怎么举报？</a></li>
          <li><a href="#">7、我的物品被别人冒领怎么办？</a></li>
          <li><a href="#">8、如何发起招领？</a></li>
          <li><a href="#">9、如何发起挂失？</a></li>
        </ul>
      </div>


    </div>

  </div>
</template>

<script setup lang="ts">
import MyEditor from "@/components/MyEditor.vue";
import {ref} from "vue";
import {UserSecurity} from "@/Interface/ApiInterface";


const showModal = ref(false)
const user = ref<UserSecurity>({
  rePassword: "",
  email: "",
  originPassword: "",
  nickname: "",
  password: ""
})

const showType = ref()

function change(type: number) {
  showType.value = type
  showModal.value = true
}

</script>

<style scoped lang="less">

#Setting-body {
  @bgColor: #ffffff;

  display: flex;
  flex-direction: row;
  width: 1000px;
  //左部分，设置
  .left {
    display: flex;
    flex-direction: column;
    width: 700px;
    background-color: @bgColor;

    .item {
      display: flex;
      flex-direction: column;
      margin: 10px 20px;
      border-bottom: 1px solid #444444;

      .item-i {
        min-height: 70px;
        margin-left: 10px;

        .modify {
          color: #646cff;
          &:hover {
            cursor: pointer;
          }
        }

        div {
          display: flex;
          justify-content: space-between;

          a {
            color: #646cff;
          }
        }
      }

    }
  }

  //右部分，常见问题
  .right {
    display: flex;
    width: 290px;
    flex-direction: column;
    margin-left: 10px;


    .question {
      background-color: @bgColor;

      padding: 10px 20px;
      width: 290px;

      ul {
        display: flex;
        flex-direction: column;

        li {
          display: inline-block;
          line-height: 30px;

          a {
            color: #8590a6;
          }

          a:hover {
            color: #1e90ff;
          }
        }
      }

    }

  }

}

</style>