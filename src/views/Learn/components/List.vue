<template>
  <div id="learn-list-body">
    <div class="list-title">
      <slot name="title">
        文章榜单
      </slot>
    </div>
    <div class="list-body">

      <div class="list-body-item ">
        <strong class="list-body-num item1">1</strong>
        <n-ellipsis style="max-width: 240px;">
          <slot name="0"></slot>
        </n-ellipsis>
      </div>
      <div class="list-body-item">
        <strong class="list-body-num item2">2</strong>
        <n-ellipsis style="max-width: 240px">
          <slot name="1"></slot>
        </n-ellipsis>
      </div>
      <div class="list-body-item">
        <strong class="list-body-num item3">3</strong>
        <n-ellipsis style="max-width: 240px">
          <slot name="2"></slot>
        </n-ellipsis>
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
    font-weight: 900;
    //color: #ff6348;
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

    .item1 {
      color: #ff6348
    }

    .item2 {
      color: #ffa502
    }

    .item3 {
      color: #f6e58d
    }

    .list-body-num {
      padding-right: 5px;
    }
  }
}
</style>