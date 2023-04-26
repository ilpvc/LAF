<template>
  <div id="learn-list-body">
    <div class="list-title">
      <slot name="title">
        文章榜单
      </slot>
    </div>
    <div class="list-body">
<!--      <n-skeleton text :repeat="2" />-->
<!--      <n-skeleton text style="width: 60%" />-->

      <div class="list-body-item">
        <strong class="list-body-num" style="color: #ff6348">1</strong>
        <n-ellipsis style="max-width: 240px">我是怎么在掘金找到老婆的</n-ellipsis>
      </div>
      <div class="list-body-item">
        <strong class="list-body-num" style="color:#ffa502">2</strong>
        <n-ellipsis style="max-width: 240px">超全终极 VueJS 资源，快</n-ellipsis>
      </div>
      <div class="list-body-item">
        <strong class="list-body-num" style="color: #f6e58d">3</strong>
        <n-ellipsis style="max-width: 240px">一名读懂域名注册</n-ellipsis>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">

#learn-list-body {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 190px;

  .list-title {
    font-family: system-ui;
    font-size: 18px;

  }

  .list-body {

    .list-body-item {
      display: flex;
      flex-direction: row;
      padding: 3px 0;

      &:hover {
        cursor: pointer;
      }
    }

    .list-body-num {
      padding-right: 5px;
    }
  }
}
</style>