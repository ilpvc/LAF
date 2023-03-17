<template>
  <div id="MyAttention-body">
    <div>
      <h3>我的关注</h3>
    </div>

    <div class="item" v-for="i in 10" :key="i">
      <div class="header-detail">
        <n-avatar
            size="large"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <div class="header-detail-dd">
          <div>
            <a href="javascript: ;" style="size: 12px;color: #646cff">昵称</a>
          </div>
          <i style="size: 12px">雷风大师</i>
        </div>
      </div>
      <a href="javascript:;">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              width="1em" >
          <path
              d="M103.34374999 866.46875001l354.65625001-354.65625001L103.34374999 157.0625c-14.90625001-14.90625001-14.90625001-39.09375001 2e-8-54 14.90625001-14.90625001 39.09375001-14.90625001 54 0L512 457.71874999 866.75 103.0625c14.90625001-14.90625001 39.09375001-14.90625001 54 0 14.90625001 14.90625001 14.90625001 39.09375001 0 54L566 511.71874999 920.75 866.46875001c14.90625001 14.90625001 14.90625001 39.09375001 0 53.99999998-7.50000001 7.40625001-17.25 11.15625001-27 11.15625001s-19.50000001-3.75-27-11.15625001L512.09375001 565.71875001 157.34374999 920.375c-7.50000001 7.40625001-17.25 11.15625001-26.99999998 11.15625001-9.75 0-19.50000001-3.75-27-11.15625001-14.90625001-14.90625001-14.90625001-39 0-53.90625001z"
              fill="#d81e06"></path>
        </svg>
        <i style="margin-left: 5px;height: 1em;line-height: 1em;display: inline-block">
          取消关注
        </i>
      </a>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped lang="less">


/*头像部分的姓名和发布时间*/
.header-detail-dd {
  display: flex;
  flex-direction: column;
  padding-left: 10px;

}

.header-detail-dd i {
  color: #8590a6;
}

/*卡片头部头像部分*/
.header-detail {
  margin: 5px 0;
  display: flex;
  flex-direction: row;
}


/*排名的每个用户信息*/
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.item a {
  display: flex;
  color: red;
  align-items: center;
  justify-content: space-around;
  font-size: 1.1em;
}

#MyAttention-body {
  width: 290px;
  margin-left: 10px;
  background-color: white;
  padding: 20px 10px;
}

</style>