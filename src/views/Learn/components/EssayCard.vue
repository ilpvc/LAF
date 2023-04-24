<template>
  <div id="essay-card">
    <div class="header">
      <div>
        {{ 'ilpvc' }}
      </div>
      <span>|</span>
      <div>
        一个月前
      </div>
      <span>|</span>
      <div>
        标签
      </div>
    </div>


    <div class="body">

      <div class="left">
        <div class="title">
          <h3>分享十个sql高级写法</h3>
        </div>

        <div class="content">
          我们项目原先使用的hutool版本是5.7.2，在代码中，我们的数据传输对象DTO和数据实体对象中大量使用了工具包中的BeanUtil.copyProperties(),
          大体代码如下：
        </div>

        <div class="footer">
          <ul class="footer">
            <li class="footer-item">
              <img src="./img/look.svg" alt="look">
              <span>1.5w</span>
            </li>
            <li class="footer-item">
              <img src="./img/dianzan.svg" alt="dianzan" style="position: relative;top: -3px"/>
              <span>
                233
              </span>
            </li>
            <li class="footer-item">
              <img src="./img/comment.svg" alt="comment">
              <span>
                43
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="right">
        <n-image
          class="right-image"
          src="https://picsum.photos/id/4/100/100">

        </n-image>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">

#essay-card {
  display: flex;
  flex-direction: column;
  width: 580px;
  padding: 0 10px;
  border-bottom: 1px solid #e5e6eb;

  .header {
    display: flex;
    flex-direction: row;
    color: #9599a7;

    span {
      padding: 0 15px;
    }
  }

  .body {
    display: flex;
    width: 580px;
    &:hover{
      cursor: pointer;
    }
    .left {
      width: 430px;

      .title {
        padding: 5px 0;
      }

      .content {
        padding: 6px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
        line-height: 1rem;
      }

      .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        //padding: 5px 0;
        width: 400px;
        color: #8590a6;

        .footer-item {
          display: flex;
          align-items: center;
          width: 60px;

          img {
            margin-right: 3px;
          }
        }
      }
    }

    .right {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;

      .right-image {
        position: relative;
        top: -10px;
        border-radius: 10px;
      }
    }
  }

}
</style>