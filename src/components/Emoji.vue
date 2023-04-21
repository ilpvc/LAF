<template>
  <div id="emoji-body">
    <i @click="submit('😀')">😀</i><i @click="submit('😁')">😁</i><i @click="submit('😂')">😂</i><i @click="submit('😃')">😃</i>
    <i @click="submit('😉')">😉</i><i @click="submit('😊')">😊</i><i @click="submit('😍')">😍</i><i @click="submit('😓')">😓</i>
    <i @click="submit('😡')">😡</i><i @click="submit('😤')">😤</i><i @click="submit('😨')">😨</i><i @click="submit('😪')">😪</i>
    <i @click="submit('🙈')">🙈</i><i @click="submit('🙏')">🙏</i><i @click="submit('🙅🏻')">🙅🏻</i><i @click="submit('👫🏿')">👫🏿</i>
    <i @click="submit('😄')">😄</i><i @click="submit('😅')">😅</i><i @click="submit('😆')">😆</i><i @click="submit('😇')">😇</i>
    <i @click="submit('😔')">😔</i><i @click="submit('😕')">😕</i><i @click="submit('😘')">😘</i><i @click="submit('😛')">😛</i>
    <i @click="submit('😭')">😭</i><i @click="submit('😱')">😱</i><i @click="submit('😵')">😵</i><i @click="submit('😷')">😷</i>
    <i @click="submit('👰🏿')">👰🏿</i><i @click="submit('👴🏿')">👴🏿</i><i @click="submit('👷🏿')">👷🏿</i><i @click="submit('🖕🏿')">🖕🏿</i>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['get-emoji'])
const submit=(emoji)=>{
  emit('get-emoji', emoji)
}


</script>

<style scoped lang="less">
#emoji-body {
  position: absolute;
  top: -162px;
  border-radius: 10px;
  width: 310px;
  height: 160px;
  background-color: white;
  padding: 5px;
  box-shadow: #cccccc 0 0 10px;
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