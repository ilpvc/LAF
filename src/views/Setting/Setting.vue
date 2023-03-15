<template>
  <div id="Setting-body">

    <div class="left">

      <div class="item">

        <h2>账号与密码设置</h2>

        <div class="item-i">
          <h3>账&nbsp;&nbsp;&nbsp;&nbsp;号</h3>
          <div>
            <i>ilpvc</i>
            <a href="#">修改</a>
          </div>
        </div>

        <div class="item-i">
          <h3>密&nbsp;&nbsp;&nbsp;&nbsp;码</h3>
          <div>
            <i>**********</i>
            <a href="#">修改</a>
          </div>
        </div>

        <div class="item-i">
          <h3>Q&nbsp;&nbsp;&nbsp;&nbsp;Q</h3>
          <div>
            <i>2693285351</i>
            <a href="#">修改</a>

          </div>
        </div>

        <div class="item-i">
          <h3>邮&nbsp;&nbsp;&nbsp;&nbsp;箱</h3>
          <div>
            <i>2693285351@qq.com</i>
            <a href="#">修改</a>

          </div>
        </div>

        <div class="item-i">
          <h3>手机号</h3>
          <div>
            <i>+861881271237</i>
            <a href="#">修改</a>
          </div>

        </div>

      </div>

      <div class="item">
        <h2>消息与用户</h2>

        <div class="item-i">
          <h3>黑名单</h3>
          <div>
            <i>ilpvc,colzry</i>
            <a href="#">修改</a>
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

    </div>

    <div class="right">
      you
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped lang="less">

#Setting-body {
  @bgColor: #ffffff;

  display: flex;
  flex-direction: row;
  width: 1000px;

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

  .right {
    display: flex;
    width: 290px;
    flex-direction: column;
    margin-left: 10px;
    background-color: @bgColor;

  }
}

</style>