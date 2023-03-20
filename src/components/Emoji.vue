<template>
  <div id="emoji-body">
    <i>😀</i><i>😁</i><i>😂</i><i>😃</i><i>😄</i><i>😅</i><i>😆</i><i>😇</i>
    <i>😉</i><i>😊</i><i>😍</i><i>😓</i><i>😔</i><i>😕</i><i>😘</i><i>😛</i>
    <i>😡</i><i>😤</i><i>😨</i><i>😪</i><i>😭</i><i>😱</i><i>😵</i><i>😷</i>
    <i>🙈</i><i>🙏</i><i>🙅🏻</i><i>👫🏿</i><i>👰🏿</i><i>👴🏿</i><i>👷🏿</i><i>🖕🏿</i>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
#emoji-body {
  position: absolute;
  top: 479px;
  //top: 90px;
  border-radius: 10px;
  width: 310px;
  height: 160px;
  background-color: white;
  padding: 5px;
  z-index: 100;
  i {
    cursor: pointer;
    font-size: 24px;
    margin: 2px;
    user-select: none;

    &:hover {
      //cursor: initial;
    }
  }

}

</style>