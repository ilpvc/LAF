<template>
  <div id="learn-list-body">
    <div class="list-title">
      综合文章榜
    </div>
    <div class="list-body">
      <div>
        <strong class="list-body-num">1</strong>
        <n-ellipsis style="max-width: 240px">我是怎么在掘金找到老婆的</n-ellipsis>
      </div>
      <div>
        <strong class="list-body-num">2</strong>
        <n-ellipsis style="max-width: 240px">超全终极 VueJS 资源，快</n-ellipsis>
      </div>
      <div>
        <strong class="list-body-num">3</strong>
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
  padding: 10px;
  width: 220px;

  .list-title {
    font-family: system-ui;
    font-size: 18px;

  }

  .list-body {
    .list-body-num {
      padding-right: 5px;
    }
  }
}
</style>