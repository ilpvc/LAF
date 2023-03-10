<template>
  <div class="body">

    <div class="header">
      <svg t="1678433436523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1268" width="24" height="24">
        <path
            d="M941.4 928.3H82c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h859.4c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z"
            fill="#FF7878" p-id="1269"></path>
        <path
            d="M834 418.9c19.7 0 35.8 16.9 35.8 37.7v433.9h-197V418.9H834m0-37.7H637v547.1h268.6V456.7c0-41.7-32-75.5-71.6-75.5z"
            fill="#FF7878" p-id="1270"></path>
        <path
            d="M601.2 136c19.7 0 35.8 16.9 35.8 37.7v716.9H386.4V173.7c0-20.8 16.1-37.7 35.8-37.7h179m0-37.8h-179c-39.6 0-71.6 33.8-71.6 75.5v754.6h322.3V173.7c0-41.7-32.1-75.5-71.7-75.5z"
            fill="#FF7878" p-id="1271"></path>
        <path
            d="M350.6 286.9v603.7h-197v-566c0-20.8 16.1-37.7 35.8-37.7h161.2m35.8-37.7h-197c-39.6 0-71.6 33.8-71.6 75.5v603.7h268.6V249.2z"
            fill="#FF7878" p-id="1272"></path>
      </svg>
      <i style="color: #444444;padding-left: 5px">
        雷锋榜
      </i>
    </div>

    <div class="item" v-for="i in 5">
      <div class="header-detail">
        <n-avatar
            size="large"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <div class="header-detail-dd">
          <div>
            <a href="javascript:;" style="size: 12px;color: #646cff">昵称</a>
          </div>
          <i style="size: 12px">雷风大师</i>
        </div>
      </div>
      <a href="javascript:;" >
        <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" class="ZDI ZDI--PlusFill24" fill="currentColor">
          <path fill-rule="evenodd"
                d="M13.25 3.25a1.25 1.25 0 1 0-2.5 0v7.5h-7.5a1.25 1.25 0 1 0 0 2.5h7.5v7.5a1.25 1.25 0 1 0 2.5 0v-7.5h7.5a1.25 1.25 0 0 0 0-2.5h-7.5v-7.5Z"
                clip-rule="evenodd"></path>
        </svg>
        <i>
          关注
        </i>
      </a>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>

/*排名的每个用户信息*/
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.item a {
  display: flex;
  color: #646cff;
  align-items: center;
  justify-content: space-around;
  width: 53px;
  font-size: 1.1em;
}

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
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
}


/*头部*/
.header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
}

/*导航卡片*/
.body {
  display: flex;
  background-color: white;
  width: 300px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 15px 10px;
  flex-direction: column;
}
</style>